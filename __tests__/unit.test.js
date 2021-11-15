// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('phone number test 1', () => {
    expect(functions.isPhoneNumber('(888)123-4567')).toBe(true);
});
test('phone number test 2', () => {
    expect(functions.isPhoneNumber('888-123-4567')).toBe(true);
});
test('phone number test 3', () => {
    expect(functions.isPhoneNumber('888')).toBe(false);
});
test('phone number test 4', () => {
    expect(functions.isPhoneNumber('888-888')).toBe(false);
});

test('email test 1', () => {
    expect(functions.isEmail('test@gmail.com')).toBe(true);
});
test('email test 2', () => {
    expect(functions.isEmail('test@yahoo.com')).toBe(true);
});
test('email test 3', () => {
    expect(functions.isEmail('test.com')).toBe(false);
});
test('email test 4', () => {
    expect(functions.isEmail('test@gmail')).toBe(false);
});

test('password test 1', () => {
    expect(functions.isStrongPassword('a_1_b_2_c_3')).toBe(true);
});
test('password test 2', () => {
    expect(functions.isStrongPassword('ABCD1234_')).toBe(true);
});
test('password test 3', () => {
    expect(functions.isStrongPassword('1234')).toBe(false);
});
test('password test 4', () => {
    expect(functions.isStrongPassword('abc')).toBe(false);
});

test('date test 1' , () => {
    expect(functions.isDate('11/14/2021')).toBe(true);
});
test('date test 2' , () => {
    expect(functions.isDate('12/25/2021')).toBe(true);
});
test('date test 3' , () => {
    expect(functions.isDate('11/14/21')).toBe(false);
});
test('date test 4' , () => {
    expect(functions.isDate('1-1-2021')).toBe(false);
});

test('color test 1' , () => {
    expect(functions.isHexColor('#FF5733')).toBe(true);
});
test('color test 2' , () => {
    expect(functions.isHexColor('#fc9')).toBe(true);
});
test('color test 3' , () => {
    expect(functions.isHexColor('ffff')).toBe(false);
});
test('color test 4' , () => {
    expect(functions.isHexColor('#f')).toBe(false);
});
