import MaterialInfo from './shared/MaterialInfo';

class pointsMaterial extends MaterialInfo {
  getIntro() {
    return 'Creates a [THREE.PointsMaterial](http://threejs.org/docs/#Reference/Materials/PointsMaterial)';
  }

  getAttributesText() {
    return {
      ...super.getAttributesText(),
      transparent: '',
      map: '',
      blending: '',
      alphaTest: '',
      depthTest: '',
      side: '',
      opacity: '',
      visible: '',
      resourceId: '',
      color: '',
      size: '',
      sizeAttenuation: '',
      fog: '',
      vertexColors: '',
    };
  }
}

module.exports = pointsMaterial;
