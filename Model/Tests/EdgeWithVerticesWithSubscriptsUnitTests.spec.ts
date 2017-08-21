import 'mocha';
import * as lodash from 'lodash';
import { expect } from 'chai';
import { VerticeWithSubscript, EdgeWithVerticesWithSubscripts } from '../';

describe('EdgeWithVerticesWithSubscripts', () => {
    let emptyValuesArr: VerticeWithSubscript[] = [undefined, null];
    let truthValues = [false, true];

    describe('ToCanonicalForm', () => {
        truthValues.forEach((truthVal) => {
            describe('empty values when isBackward is ' + truthVal, () => {
                emptyValuesArr.forEach((firstVal) => {
                    emptyValuesArr.forEach((secondVal) => {
                        it('From first vertice, first vertice is ' + firstVal + ' and the second is ' + secondVal + ' - should throw error appropriately', () => {
                            let edge = new EdgeWithVerticesWithSubscripts();
                            edge.firstVertice = firstVal;
                            edge.secondVertice = secondVal;

                            let badFunc = function () { let canonicalForm = edge.ToCanonicalForm(truthVal, edge.firstVertice) };

                            expect(badFunc).to.throw('First vertice is empty');
                        });

                        it('From second vertice, first vertice is ' + firstVal + ' and the second is ' + secondVal + ' - should throw error appropriately', () => {
                            let edge = new EdgeWithVerticesWithSubscripts();
                            edge.firstVertice = firstVal;
                            edge.secondVertice = secondVal;

                            let badFunc = function () { let canonicalForm = edge.ToCanonicalForm(truthVal, edge.secondVertice) };

                            expect(badFunc).to.throw('First vertice is empty');
                        });
                    });
                });

                emptyValuesArr.forEach((val) => {
                    it('From first vertice, first vertice is ' + val + ' - should throw error appropriately', () => {
                        let edge = new EdgeWithVerticesWithSubscripts();
                        edge.secondVertice = new VerticeWithSubscript();

                        let badFunc = function () { let canonicalForm = edge.ToCanonicalForm(truthVal, edge.firstVertice) };

                        expect(badFunc).to.throw('First vertice is empty');
                    });

                    it('From second vertice, first vertice is ' + val + ' - should throw error appropriately', () => {
                        let edge = new EdgeWithVerticesWithSubscripts();
                        edge.secondVertice = new VerticeWithSubscript();

                        let badFunc = function () { let canonicalForm = edge.ToCanonicalForm(truthVal, edge.secondVertice) };

                        expect(badFunc).to.throw('First vertice is empty');
                    })
                });

                emptyValuesArr.forEach((val) => {
                    it('From first vertice, Second vertice is ' + val + ' - should throw error appropriately', () => {
                        let edge = new EdgeWithVerticesWithSubscripts();
                        edge.firstVertice = new VerticeWithSubscript();

                        let badFunc = function () { let canonicalForm = edge.ToCanonicalForm(truthVal, edge.firstVertice) };

                        expect(badFunc).to.throw('second vertice is empty');
                    });

                    it('From second vertice, Second vertice is ' + val + ' - should throw error appropriately', () => {
                        let edge = new EdgeWithVerticesWithSubscripts();
                        edge.firstVertice = new VerticeWithSubscript();

                        let badFunc = function () { let canonicalForm = edge.ToCanonicalForm(truthVal, edge.secondVertice) };

                        expect(badFunc).to.throw('second vertice is empty');
                    });
                });
            });
        });

        describe('Correct edge', () => {
            it('from first vertice, backwards if false - should return correct result', () => {
                let edge = new EdgeWithVerticesWithSubscripts({ id: '0', label: 'a' });
                edge.firstVertice = new VerticeWithSubscript({ Id: '0', label: 'X' });
                edge.secondVertice = new VerticeWithSubscript({ Id: '1', label: 'Y' });

                let canonicalForm = edge.ToCanonicalForm(false, edge.firstVertice);

                expect(canonicalForm).to.be.deep.equal(['0', '1', 'X', 'a', 'Y']);
            });

            it('from first vertice, isbackwards is true - should return correct result', () => {
                let edge = new EdgeWithVerticesWithSubscripts({ id: '0', label: 'a' });
                edge.firstVertice = new VerticeWithSubscript({ Id: '0', label: 'X' });
                edge.secondVertice = new VerticeWithSubscript({ Id: '1', label: 'Y' });

                let canonicalForm = edge.ToCanonicalForm(true, edge.firstVertice);

                expect(canonicalForm).to.be.deep.equal(['1', '0', 'Y', 'a', 'X']);
            });

            it('from second vertice, backwards if false - should return correct result', () => {
                let edge = new EdgeWithVerticesWithSubscripts({ id: '0', label: 'a' });
                edge.firstVertice = new VerticeWithSubscript({ Id: '0', label: 'X' });
                edge.secondVertice = new VerticeWithSubscript({ Id: '1', label: 'Y' });

                let canonicalForm = edge.ToCanonicalForm(false, edge.secondVertice);

                expect(canonicalForm).to.be.deep.equal(['1', '0', 'Y', 'a', 'X']);
            });

            it('from second vertice, isbackwards is true - should return correct result', () => {
                let edge = new EdgeWithVerticesWithSubscripts({ id: '0', label: 'a' });
                edge.firstVertice = new VerticeWithSubscript({ Id: '0', label: 'X' });
                edge.secondVertice = new VerticeWithSubscript({ Id: '1', label: 'Y' });

                let canonicalForm = edge.ToCanonicalForm(true, edge.secondVertice);

                expect(canonicalForm).to.be.deep.equal(['0', '1', 'X', 'a', 'Y']);
            });
        });
    });
});