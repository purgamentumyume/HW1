const sum = (n1: number, n2: number) => n1 + n2;

describe('Application', () => {
    it('true should be true', () => {
        expect(true).toBe(true);
    });

    it('2+2 should be 4', () => {
        expect(sum(2, 2)).toBe(4);
    });
});
