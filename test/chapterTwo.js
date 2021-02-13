// Test Suite - Mathematical Operations

// Test Cases

// 1. Addition
// 2. Subtraction
// 3. Multiplication
// 4. Division

var assert = require('assert');

describe('Mathematical Operations - Test Suite', function(){

  it('Addition of two numbers', function(){

    var a = 10;
    var b = 10;

    var c = a+b;

    assert.strictEqual(c,20);

  });

  it('Subtraction of two numbers', function(){

    var a = 10;
    var b = 10;

    var c = a-b;

    assert.strictEqual(c,0);


  });

  it('Multiplication of two numbers', function(){

    var a = 10;
    var b = 10;

    var c = a*b;

    assert.strictEqual(c,100);


  });

  it('Division of two numbers', function(){

    var a = 10;
    var b = 10;

    var c = a/b;

    assert.strictEqual(c,0);


  });

});