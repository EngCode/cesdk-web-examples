import { caseAssetPath } from '../../util';
import STICKERS from './CustomStickerAssets.json';

const findCustomStickerAssets = async (queryData) => {
  const results = STICKERS.map((stickerUrl) => ({
    url: stickerUrl
  }));
  const assetSourceResult = {
    assets: results.map(translateToAssetResult),
    total: results.length,
    currentPage: 1,
    nextPage: undefined
  };
  return assetSourceResult;
};

function translateToAssetResult({ url }) {
  const fileName = getFileName(url);
  return {
    id: fileName,
    locale: 'en',
    label: fileName,

    thumbUri: caseAssetPath(url),

    size: {
      width: 100,
      height: 100
    },

    meta: {
      blockType: 'ly.img.sticker',
      uri: caseAssetPath(url)
    },

    context: {
      sourceId: 'stickers'
    }
  };
}

function getFileName(url) {
  return url.split('/').pop().split('.')[0];
}

export const CustomStickerAssetLibrary = {
  id: 'stickers',
  findAssets: findCustomStickerAssets
};
