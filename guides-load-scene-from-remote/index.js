
import 'https://cdn.img.ly/packages/imgly/cesdk-js/1.9.2/cesdk.umd.js';

CreativeEditorSDK.init('#cesdk_container').then(async (cesdk) => {
  // highlight-url
  const sceneUrl = 'https://cdn.img.ly/packages/imgly/cesdk-js/1.9.2/assets/templates/cesdk_postcard_1.scene';
  // highlight-url

  // highlight-load
  cesdk.loadFromURL(sceneUrl).then(() => {
    console.log('Load succeeded')
  }).catch((error) => {
    console.error('Load failed', error)
  });
  // highlight-load
});
