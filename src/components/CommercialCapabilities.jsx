import { useEffect, useMemo, useRef, useState } from "react";
import {
  economicsAssumptions,
  economicsDisclaimer,
  economicsExamples,
  productCategories,
  products,
} from "../data/commercialCapabilities.js";
import { useAutoplayCarousel } from "../hooks/useAutoplayCarousel.js";
import "./CommercialCapabilities.css";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const monthlyCurrencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function ProductEconomics({ product, equipmentInvestment }) {
  const economics = economicsExamples[product.economicsId];
  const monthlySales = economics.monthlySales ?? economicsAssumptions.monthlySales;
  const marginRate = Number.parseInt(economics.margin, 10) / 100;
  const monthlyPayment = equipmentInvestment / 24;
  const monthlyProfit = economics.unitPrice * marginRate * monthlySales;
  const paybackMonths = equipmentInvestment / monthlyProfit;

  return (
    <aside className="product-economics" aria-live="polite" aria-atomic="true">
      <div key={product.id} className="product-economics__inner">
        <header className="product-economics__header">
          <div>
            <span>ILLUSTRATIVE EXAMPLE</span>
            <h4>Estimated monthly profit</h4>
          </div>
          <strong>{currencyFormatter.format(monthlyProfit)}<small>/mo.</small></strong>
        </header>
        <dl className="product-economics__metrics">
          <div className="product-economics__payback"><dt>Estimated payback</dt><dd>{paybackMonths.toFixed(1)}<small>months</small></dd></div>
          <div><dt>24-month payment</dt><dd>{monthlyCurrencyFormatter.format(monthlyPayment)}<small>/mo.*</small></dd></div>
        </dl>
        <p className="product-economics__assumptions">
          {monthlySales} {economics.orderValue.includes("batch") ? "batches" : "items"}/mo. × {currencyFormatter.format(economics.unitPrice)} selling price per {economics.orderValue.includes("batch") ? "batch" : "item"} × {economics.margin} assumed contribution margin. Estimated payback uses the {currencyFormatter.format(equipmentInvestment)} equipment price. Profit shown is before fixed overhead, tax and financing costs.
        </p>
        <p className="product-economics__disclaimer">{economicsDisclaimer}</p>
      </div>
    </aside>
  );
}

function ProductOpportunities({ asset, equipmentInvestment }) {
  const {
    activeIndex: activeCategoryIndex,
    selectIndex: selectCategoryIndex,
    interactionProps: categoryCarouselProps,
  } = useAutoplayCarousel(productCategories.length);
  const {
    onTouchStart: startCategorySwipe,
    onTouchEnd: endCategorySwipe,
    onTouchCancel: cancelCategorySwipe,
    ...categoryPauseProps
  } = categoryCarouselProps;
  const [activeProductId, setActiveProductId] = useState(productCategories[0].productIds[0]);
  const categoryTabRefs = useRef([]);
  const productTabRefs = useRef([]);
  const selectionRef = useRef(null);
  const activeCategory = productCategories[activeCategoryIndex];
  const categoryProducts = useMemo(
    () => activeCategory.productIds.map((productId) => products[productId]),
    [activeCategory],
  );
  const activeProduct = products[activeProductId] ?? categoryProducts[0];

  useEffect(() => {
    setActiveProductId(productCategories[activeCategoryIndex].productIds[0]);
  }, [activeCategoryIndex]);

  function selectCategory(index) {
    const nextIndex = (index + productCategories.length) % productCategories.length;
    selectCategoryIndex(nextIndex);
  }

  function handleCategoryKeyDown(event, index) {
    const navigationKeys = ["ArrowLeft", "ArrowRight", "Home", "End"];
    if (!navigationKeys.includes(event.key)) return;
    event.preventDefault();
    const nextIndex = event.key === "Home"
      ? 0
      : event.key === "End"
        ? productCategories.length - 1
        : event.key === "ArrowLeft"
          ? (index - 1 + productCategories.length) % productCategories.length
          : (index + 1) % productCategories.length;
    selectCategory(nextIndex);
    categoryTabRefs.current[nextIndex]?.focus();
  }

  function handleProductKeyDown(event, index) {
    const navigationKeys = ["ArrowLeft", "ArrowRight", "Home", "End"];
    if (!navigationKeys.includes(event.key)) return;
    event.preventDefault();
    const nextIndex = event.key === "Home"
      ? 0
      : event.key === "End"
        ? categoryProducts.length - 1
        : event.key === "ArrowLeft"
          ? (index - 1 + categoryProducts.length) % categoryProducts.length
          : (index + 1) % categoryProducts.length;
    setActiveProductId(categoryProducts[nextIndex].id);
    productTabRefs.current[nextIndex]?.focus();
  }

  function selectProduct(productId) {
    setActiveProductId(productId);
    if (typeof window === "undefined" || !window.matchMedia("(max-width: 640px)").matches) return;
    window.requestAnimationFrame(() => {
      selectionRef.current?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "nearest",
      });
    });
  }

  return (
    <section
      id="product-opportunities"
      className="product-opportunities"
      aria-labelledby="product-opportunities-title"
      {...categoryPauseProps}
    >
      <div className="product-opportunities__inner">
        <header className="product-opportunities__header">
          <span className="eyebrow">PRODUCT OPPORTUNITIES</span>
          <h2 id="product-opportunities-title">What could you make with VertiGo?</h2>
          <p>Explore cylindrical product categories designed for one-offs, repeat orders and small-batch production.</p>
        </header>

        <div
          className="product-opportunities__tabs"
          role="tablist"
          aria-label="Explore product opportunity categories"
          onTouchStart={startCategorySwipe}
          onTouchEnd={endCategorySwipe}
          onTouchCancel={cancelCategorySwipe}
        >
          {productCategories.map((category, index) => (
            <button
              type="button"
              role="tab"
              id={`opportunity-tab-${category.id}`}
              aria-controls={`opportunity-panel-${category.id}`}
              aria-selected={index === activeCategoryIndex}
              tabIndex={index === activeCategoryIndex ? 0 : -1}
              className={index === activeCategoryIndex ? "is-active" : ""}
              key={category.id}
              ref={(node) => { categoryTabRefs.current[index] = node; }}
              onClick={() => selectCategory(index)}
              onKeyDown={(event) => handleCategoryKeyDown(event, index)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{category.label}</strong>
            </button>
          ))}
        </div>

        <div
          className="product-opportunities__panel"
          id={`opportunity-panel-${activeCategory.id}`}
          role="tabpanel"
          aria-labelledby={`opportunity-tab-${activeCategory.id}`}
        >
          <header className="product-opportunities__category-copy">
            <p>{activeCategory.description}</p>
          </header>

          <div className="product-card-grid" role="tablist" aria-label={`${activeCategory.label} products`}>
            {categoryProducts.map((product, index) => {
              const economics = economicsExamples[product.economicsId];
              const isActive = product.id === activeProduct.id;

              return (
                <button
                  type="button"
                  role="tab"
                  id={`product-tab-${product.id}`}
                  aria-controls={`product-panel-${activeCategory.id}`}
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                  className={isActive ? "product-card is-active" : "product-card"}
                  onClick={() => selectProduct(product.id)}
                  onKeyDown={(event) => handleProductKeyDown(event, index)}
                  key={product.id}
                  ref={(node) => { productTabRefs.current[index] = node; }}
                  data-product-id={product.id}
                >
                  <span className="product-card__media">
                    <img
                      src={asset(product.image)}
                      alt={product.imageAlt}
                      width="1200"
                      height="900"
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                  <span className="product-card__body">
                    <small>{String(index + 1).padStart(2, "0")}</small>
                    <strong>{product.name}</strong>
                    <span className="product-card__economics">
                      <span>Selling Price: <b>{economics.sellingPrice}</b></span>
                      <span>Assumed Margin: <b>{economics.margin}</b></span>
                      <span>Hourly Revenue Output: <b>Based on orders &amp; labor time</b></span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div
            className="product-opportunities__selection"
            id={`product-panel-${activeCategory.id}`}
            role="tabpanel"
            aria-labelledby={`product-tab-${activeProduct.id}`}
            aria-live="polite"
            ref={selectionRef}
          >
            <article
              className="product-detail"
              key={activeProduct.id}
            >
              <div className="product-detail__facts">
                <span><small>Material</small><strong>{activeProduct.material}</strong></span>
                <span><small>Process</small><strong>{activeProduct.process}</strong></span>
              </div>
              <div className="product-detail__tags">
                {activeProduct.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <p className="product-detail__summary">{activeProduct.description}</p>
              <p className="product-detail__setup">
                <small>Setup guidance</small>
                <span>{activeProduct.setupNote}</span>
              </p>
            </article>
            <ProductEconomics product={activeProduct} equipmentInvestment={equipmentInvestment} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function CommercialCapabilities({ asset, equipmentInvestment }) {
  return (
    <section className="commercial-capabilities" id="roi-materials" aria-label="VertiGo product and material opportunities">
      <span className="commercial-capabilities__anchor" id="capabilities" aria-hidden="true" />
      <span className="commercial-capabilities__anchor" id="results" aria-hidden="true" />
      <ProductOpportunities asset={asset} equipmentInvestment={equipmentInvestment} />
    </section>
  );
}
