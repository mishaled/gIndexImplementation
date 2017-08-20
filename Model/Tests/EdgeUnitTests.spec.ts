import 'mocha';
import * as lodash from 'lodash';
import { expect } from 'chai';
import { Vertice, Edge } from '../';

describe('Edge', () => {
    let emptyValuesArr: Vertice[] = [undefined, null];

    describe('ToCanonicalForm', () => {
        emptyValuesArr.forEach((firstVal) => {
            emptyValuesArr.forEach((secondVal) => it('First vertice is ' + firstVal + ' and the second is ' + secondVal + ' - should throw error appropriately', () => {
                let edge = new Edge();
                edge.firstVertice = firstVal;
                edge.secondVertice = secondVal;

                let badFunc = function () { let canonicalForm = edge.ToCanonicalForm() };

                expect(badFunc).to.throw('First vertice is empty');
            }));
        });

        emptyValuesArr.forEach((val) => {
            it('First vertice is ' + val + ' - should throw error appropriately', () => {
                let edge = new Edge();
                edge.secondVertice = new Vertice();

                let badFunc = function () { let canonicalForm = edge.ToCanonicalForm() };

                expect(badFunc).to.throw('First vertice is empty');
            })
        });

        emptyValuesArr.forEach((val) => {
            it('Second vertice is ' + val + ' - should throw error appropriately', () => {
                let edge = new Edge();
                edge.firstVertice = new Vertice();

                let badFunc = function () { let canonicalForm = edge.ToCanonicalForm() };

                expect(badFunc).to.throw('First vertice is empty');
            });
        });

        it('Correct edge - should return correct result', () => {
            let edge = new Edge({ id: '0', label: 'a' });
            edge.firstVertice = new Vertice({ Id: '0', label: 'X' });
            edge.secondVertice = new Vertice({ Id: '1', label: 'Y' });

            let canonicalForm = edge.ToCanonicalForm();

            expect(canonicalForm).to.be.deep.equal(['0', '1', 'X', 'a', 'Y']);
        });
    });
});
