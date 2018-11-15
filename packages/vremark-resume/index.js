var data = require('../unist-util-data');
var PLUGIN_NAME = 'vremark-plugin-resume';

function isPlugin(node) {
    return node.lang && node.lang === 'resume';
}

function plugin(options = {}) {
    return function transformer(root) {
        var children = root.children;
        for(var i=0;i<children.length;i++) {
            var node = children[i];
            if( node.type === 'code' && isPlugin(node) ){
                data(node, {
                    plugin: PLUGIN_NAME,
                    props: {
                        lang: node.lang,
                        code: node.value
                    }
                });
            }
        }
    };
}

module.exports = plugin;