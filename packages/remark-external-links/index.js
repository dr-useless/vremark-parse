var visit = require('unist-util-visit')
var spaceSeparated = require('space-separated-tokens').parse

module.exports = externalLinks

var relative = /^[^/]+\/[^/].*$|^\/[^/].*$/
var defaultTarget = '_blank'
var defaultRel = ['nofollow', 'noopener', 'noreferrer']

function externalLinks(options) {
    var opts = options || {}
    var target = opts.target
    var rel = opts.rel || false

    if (typeof rel === 'string') {
        rel = spaceSeparated(rel)
    }

    return transform

    function transform(tree) {
        // visit(tree, 'link', visitor)
        // visit(tree, 'linkReference', visitor)

        visit(tree, function (node) {
            return node.type === 'link' || node.type === 'linkReference'
        }, visitor)

    }

    function visitor(node) {
        var data
        var props

        // if (!relative.test(node.url)) {
        data = node.data || (node.data = {})
        props = data.hProperties || (data.hProperties = {})

        if (target !== false) {
            props.target = target || defaultTarget
        }

        if (rel !== false) {
            props.rel = (rel || defaultRel).concat()
        }
        // }
    }
}
