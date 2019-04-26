import Node from 'node';

const node = new Node(2000);

describe('Node Class', () => {
 test('all required properties should be defined', ()=> {
    expect(node.forwardNode).toBeDefined();
    expect(node.subject).toBeDefined();
    expect(node.amount).toBeDefined();
 });

 test('should have a show method', () => {
    expect(node.show()).toEqual(`${node.subject}: ${node.amount}`);
 });
});
