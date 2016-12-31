import * as THREE from 'three';

import PropTypes from 'react/lib/ReactPropTypes';

import MaterialDescriptorBase from './MaterialDescriptorBase';

class PointsMaterialDescriptor extends MaterialDescriptorBase {
  constructor(react3RendererInstance) {
    super(react3RendererInstance);

    this.hasColor();

    this.hasProp('size', {
      type: PropTypes.number,
      simple: true,
      default: 1,
    });

    this.hasProp('map', {
      type: propTypeInstanceOf(THREE.Texture),
      default: null,
    });

    this.hasProp('sizeAttenuation', {
      type: PropTypes.bool,
      update(threeObject, sizeAttenuation, existsInProps) {
        if (existsInProps) {
          threeObject.sizeAttenuation = sizeAttenuation;
        }
        threeObject.needsUpdate = true;
      },
      updateInitial: true,
      default: true,
    });

    this.hasProp('fog', {
      type: PropTypes.bool,
      update(threeObject, fog, existsInProps) {
        if (existsInProps) {
          threeObject.fog = fog;
        }
        threeObject.needsUpdate = true;
      },
      updateInitial: true,
      default: true,
    });

    this.hasProp('vertexColors', {
      type: PropTypes.oneOf([
        THREE.NoColors,
        THREE.FaceColors,
        THREE.VertexColors,
      ]),
      simple: true,
      default: THREE.NoColors,
    });
  }

  construct(props) {
    const materialDescription = this.getMaterialDescription(props);

    return new THREE.PointsMaterial(materialDescription);
  }
}

module.exports = PointsMaterialDescriptor;
