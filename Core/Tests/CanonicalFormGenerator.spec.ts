import 'mocha';
import * as lodash from 'lodash';
import { expect } from 'chai';
import { Vertice, Edge, Graph } from '../../Model';
import { CanonicalFormGenerator } from '../'

describe('CanonicalFormGenerator', () => {
    let emptyValuesArr: Vertice[][] = [undefined, null, []];

    describe('GenerateCanonicalForm', () => {
        it('Not empty graph - should generate correct label for graph', () => {
            let graph = generateGraph();

            let canonicalFormGenerator = new CanonicalFormGenerator(graph);
            let canonicalForm = canonicalFormGenerator.GetCanonicalForm();

            expect(canonicalForm).to.be.deep.equal([['0', '1', 'X', 'a', 'X'], ['1', '2', 'X', 'a', 'Z'], ['2', '0', 'Z', 'b', 'X'], ['1', '3', 'X', 'b', 'Y']]);
        });

        emptyValuesArr.forEach((val) => it('Graph vertices are ' + val + '- should generate correct label for graph', () => {
            let graph = new Graph();
            graph.V = val;

            let badFunc = function () {
                let canonicalFormGenerator = new CanonicalFormGenerator(graph);
                let canonicalForm = canonicalFormGenerator.GetCanonicalForm();
            };

            expect(badFunc).to.throw('There are no edges in the graph');
        }));

        function generateGraph(): Graph {
            let graph = new Graph();
            let verticeX0 = new Vertice({
                Id: '0',
                label: 'X'
            });
            graph.V.push(verticeX0);

            let verticeX1 = new Vertice({
                Id: '1',
                label: 'X'
            });
            graph.V.push(verticeX1);

            let verticeY = new Vertice({
                Id: '3',
                label: 'Y'
            });
            graph.V.push(verticeY);

            let verticeZ = new Vertice({
                Id: '2',
                label: 'Z'
            });
            graph.V.push(verticeZ);

            graph.E.push(new Edge({
                id: lodash.uniqueId(),
                label: 'a',
                firstVertice: verticeX0,
                secondVertice: verticeX1
            }));

            graph.E.push(new Edge({
                id: lodash.uniqueId(),
                label: 'a',
                firstVertice: verticeX1,
                secondVertice: verticeZ
            }));

            graph.E.push(new Edge({
                id: lodash.uniqueId(),
                label: 'b',
                firstVertice: verticeX1,
                secondVertice: verticeY
            }));

            graph.E.push(new Edge({
                id: lodash.uniqueId(),
                label: 'b',
                firstVertice: verticeX1,
                secondVertice: verticeZ
            }));

            return graph;
        }
    });
});