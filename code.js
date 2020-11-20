var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["00e46d60-0468-4c14-80ff-ef7cec4baec2","41fb2270-4145-4ce8-bba4-76626683adec","d9adb0af-672d-4cb1-91d4-c2a258a4b4a5","ca758cbe-d5ac-49eb-922f-e965a725b9db","548785ac-f8db-46ba-b891-1bf162fa3109","abd59bbd-c70f-4dec-abf3-37bf0edfaf36"],"propsByKey":{"00e46d60-0468-4c14-80ff-ef7cec4baec2":{"name":"carrot","sourceUrl":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/00e46d60-0468-4c14-80ff-ef7cec4baec2.png","frameSize":{"x":17,"y":43},"frameCount":1,"looping":true,"frameDelay":4,"version":"kTd2cf1iA5NiHunlH1OC1ucrL2hqSOcj","loadedFromSource":true,"saved":true,"sourceSize":{"x":17,"y":43},"rootRelativePath":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/00e46d60-0468-4c14-80ff-ef7cec4baec2.png"},"41fb2270-4145-4ce8-bba4-76626683adec":{"name":"brinjal","sourceUrl":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/41fb2270-4145-4ce8-bba4-76626683adec.png","frameSize":{"x":25,"y":43},"frameCount":1,"looping":true,"frameDelay":4,"version":"axzXDQ1liiVDFF5BWhKAIzmm3CbLN00N","loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":43},"rootRelativePath":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/41fb2270-4145-4ce8-bba4-76626683adec.png"},"d9adb0af-672d-4cb1-91d4-c2a258a4b4a5":{"name":"capcisum","sourceUrl":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/d9adb0af-672d-4cb1-91d4-c2a258a4b4a5.png","frameSize":{"x":27,"y":43},"frameCount":1,"looping":true,"frameDelay":4,"version":"LtAAlvak1wwUpAR8Z2vowrFT4m8VZlPr","loadedFromSource":true,"saved":true,"sourceSize":{"x":27,"y":43},"rootRelativePath":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/d9adb0af-672d-4cb1-91d4-c2a258a4b4a5.png"},"ca758cbe-d5ac-49eb-922f-e965a725b9db":{"name":"orange","sourceUrl":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/ca758cbe-d5ac-49eb-922f-e965a725b9db.png","frameSize":{"x":35,"y":43},"frameCount":1,"looping":true,"frameDelay":4,"version":"P9jIvT8PKCLxkySTMAorHXPRetwDkuz5","loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":43},"rootRelativePath":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/ca758cbe-d5ac-49eb-922f-e965a725b9db.png"},"548785ac-f8db-46ba-b891-1bf162fa3109":{"name":"tomato","sourceUrl":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/548785ac-f8db-46ba-b891-1bf162fa3109.png","frameSize":{"x":39,"y":43},"frameCount":1,"looping":true,"frameDelay":4,"version":"EJXkIsM669W6tGxLqNjG.DFC5B3Iuj7D","loadedFromSource":true,"saved":true,"sourceSize":{"x":39,"y":43},"rootRelativePath":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/548785ac-f8db-46ba-b891-1bf162fa3109.png"},"abd59bbd-c70f-4dec-abf3-37bf0edfaf36":{"name":"onion","sourceUrl":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/abd59bbd-c70f-4dec-abf3-37bf0edfaf36.png","frameSize":{"x":25,"y":43},"frameCount":1,"looping":true,"frameDelay":4,"version":"K.0jV87IRsr5wToG0Gl8CR2flkU7Hls7","loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":43},"rootRelativePath":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/abd59bbd-c70f-4dec-abf3-37bf0edfaf36.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

for (var i = 40; i < 400; i=i+80) {
  var tomato = createSprite(i, 84, 20, 20);
tomato.setAnimation("tomato"); }

for (var i = 40; i < 400; i=i+80) {
  var onion = createSprite(i,149, 20, 20);
onion.setAnimation("onion"); }

for (var i = 40; i < 400; i=i+80) {
  var capcisum = createSprite(i,212 ,20, 20);
capcisum.setAnimation("capcisum"); }

for (var i = 40; i < 400; i=i+80) {
  var brinjal = createSprite(i,270, 20, 20);
brinjal.setAnimation("brinjal"); }

for (var i = 40; i < 400; i=i+80) {
  var carrot = createSprite(i,332, 20, 20);
carrot.setAnimation("carrot"); }




































function draw() {
  background("brown");
  
  
  
  
  
  
  
drawSprites();
    
  
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
