import { UNIST } from 'unist';
declare module 'mdast' {
    namespace MDAST {
        interface Math extends UNIST.Text {
            type: 'math';
            math: string;
        }
        interface InlineMath extends UNIST.Text {
            type: 'inlineMath';
            math: string;
        }
    }
}
