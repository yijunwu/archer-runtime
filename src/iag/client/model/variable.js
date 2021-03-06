/**
 * 
 * Copyright (c) 2018 - present, byteAgenten GmbH, Germany. All rights reserved.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var _ = require('iag/client/util/language-utils');

function VariableModel(config) {

    var keyFrames = createKeyFrames(config);

    return _.assign(
        {},
        config,
        {
            config: config,
            keyFrames: keyFrames
        }
    );
}

function createKeyFrames(config) {

    var type = config.type;

    var frames = [];

    _.forIn(config.keyFrames, function (val, key) {
        frames.push({ name: key, value: val });
    });

    if (type == 'number') {
        frames.push({ name: '$min', value: config.minimum });
        frames.push({ name: '$max', value: config.maximum });
    }

    if (type == 'boolean') {
        frames.push({ name: '$true', value: true });
        frames.push({ name: '$false', value: false });
    }

    return frames;
}

module.exports = VariableModel;
