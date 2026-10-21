# Workflow shop-owner scene and supplied animation

User requested a smaller machine with a visible, happy woman shop owner operating its touchscreen in a cup shop. Latest correction explicitly permits a cup and chamber lighting during engraving; the cup must be securely held. User also replaces the first workflow support photo with the supplied animation, processed like the existing cover-fit animations.

## Generation

Provider/workflow: ChatGPT High through Ego, native image-viewer download. Conversation: https://chatgpt.com/c/6ad86fd7-43b4-83e8-b9a9-5a0b72fa1c0c

Reference 1: `/Users/yongyuan/Downloads/VertiGo/VertiGo5.png`, machine appearance. Reference 2: existing actual `vertigo-vertical-rotary-poster-20261020.webp`, cup/rotary placement only. Original: ignored `references/incoming/workflow-shop-20261021/shop-owner.png`. Production: `vertigo-workflow-shop-owner-20261021.webp`, 1672 × 941, quality 94 without resize/crop.

Final sent prompt:

> 请直接生成一张用于OneLaser VertiGo网页Smart Workflow模块的真实商业摄影大图，横向16:9构图。参考图1是机器外观唯一主参考；图2只用于理解内部杯子在旋转夹具上的固定方式，不要复制图2场景。
>
> 画面：温暖明亮、真实精致的卖杯子的小店，木质货架陈列定制保温杯、马克杯，店主是一位自然亲切的成年女性，开心微笑，脸部和上半身完整出镜，站在机器旁边，伸出食指轻触机器正面右侧的细长竖向触摸屏，目光看向屏幕。机器在结实木柜台上，完整入镜但比上一版近景更小，约占画面宽度40%，人物与店铺环境也清晰可见，中景商业生活方式摄影。
>
> 机器必须忠实参考图1：白色方形外壳、红色窗框、黑色门把手、右侧窄竖屏、正确OneLaser/VertiGo标识与整体比例，不要扩大屏幕。门关闭。内部可以亮暖色工作灯，正在雕刻一只竖直的深绿色涂层保温杯，杯底确实坐在橙黑色集成旋转夹具中，被夹爪稳固对称夹紧，没有悬浮、歪斜、脱离夹具，杯身上可有精细植物雕刻图案。激光头在杯子左边侧向雕刻，保持竖直导轨；没有可见长光束，没有火花或烟雾。柜台外也可以陈列几只杯子，但不要挡住门窗、杯子夹具或女店主。
>
> 光线：自然窗光加温和室内光，高级而生活化，人物真实、手指自然、细节干净，不要过分虚化。不要添加海报文字、参数、字幕、水印或拼图。只生成一张完整照片。

Visually checked original: machine and woman both visible, finger touches portrait screen, closed illuminated chamber, upright green cup seated on the orange/black chuck, no exposed beam/sparks. Generated scene remains identified as illustrative in alt text.

## Animation

User source: `/Users/yongyuan/Downloads/未命名文件夹/d4a65749ef936443c28c6f57c44b2edd_original.webp`. Copy unchanged to `vertigo-workflow-positioning-animated-20261021.webp`; 600 × 338, 46 frames, 100 ms/frame, infinite loop. Extract first frame to `vertigo-workflow-positioning-poster-20261021.webp`. Use existing AnimatedSupportImage control and centered cover for the Workflow animation; crop sides to fill 3:2 without letterboxing. Preserve copy and other support images.

## Checks

Follow-up while release was in progress: merge red-light positioning and autofocus into the first card, titled “Automatic Focus, Precise Positioning”. Merge 99% preinstalled / 15-minute setup and one-touch operation into the second card, titled “Ready in 15 Minutes. One-Touch Simplicity.” Use the supplied rotating-machine animation `/Users/yongyuan/Downloads/未命名文件夹/6fb8e805446f1ef2fd7c6f049521f44d_original.webp` unchanged as `vertigo-workflow-ready-animated-20261021.webp` (600 × 338, 188 frames, 30 ms/frame, infinite loop) with first-frame poster and the same cover/control treatment. Previous autofocus image remains preserved on disk.

`npm run verify` passed. Desktop 1454 px and mobile 390 px: new hero loaded at natural 1672 × 941, woman/complete machine visible, no horizontal overflow. Supplied animation fills its 3:2 frame with cover; Pause displays poster, Play restores animation, reduced-motion switches to poster. Local evidence stays ignored beside original download. Publication requires successful Pages deployment and a fresh live check of these two asset routes.
