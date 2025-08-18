const add = (a,b) =>{
  return a+b;
}

const multi = (a,b) =>{
    return a*b;
}

module.exports.add = add;
module.exports.multi = multi;

// Or above same method can used this type
// module.exports = {add,multi}