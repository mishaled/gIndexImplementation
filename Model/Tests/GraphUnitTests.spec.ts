import 'mocha';
import * as lodash from 'lodash';
import { expect } from 'chai';
import { Vertice, Edge, Graph } from '../';

describe('Graph', () => {
    let emptyValuesArr: Vertice[][] = [undefined, null, []];

    describe('IsEmpty', () => {
        let emptyValuesArr: any = [undefined, null, []];

        (() => {
            emptyValuesArr.forEach((firstVal: any) => {
                emptyValuesArr.forEach((secondVal: any) => {
                    it('Vertices is ' + secondVal + ' and edged are ' + firstVal + '- should return true',
                        () => {
                            let graph: Graph = new Graph();
                            graph.V = secondVal;
                            graph.E = firstVal;

                            let returnVal = graph.IsEmpty();

                            expect(returnVal).to.be.true;
                        });
                });

                it('Vertices is ' + firstVal + ' and edged not empty - should return false',
                    () => {
                        let graph: Graph = new Graph();
                        graph.V = firstVal;
                        graph.E.push(new Edge());

                        let returnVal = graph.IsEmpty();

                        expect(returnVal).to.be.false;
                    });

                it('Vertices are not empty and edged are: ' + firstVal + ' - should return false',
                    () => {
                        let graph: Graph = new Graph();
                        graph.V.push(new Vertice());
                        graph.E = firstVal;

                        let returnVal = graph.IsEmpty();

                        expect(returnVal).to.be.false;
                    });
            });
        })();

        it('Both edges and vertices are not empty - should return false',
            () => {
                let graph: Graph = new Graph();
                graph.V.push(new Vertice());
                graph.E.push(new Edge());

                let returnVal = graph.IsEmpty();

                expect(returnVal).to.be.false;
            });
    });
});