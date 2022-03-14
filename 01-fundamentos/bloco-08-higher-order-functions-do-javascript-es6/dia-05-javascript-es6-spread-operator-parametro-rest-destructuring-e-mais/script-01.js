// 
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

const triangleArea = () => {
  let result = 'Áreas dos triângulos: ';
  rectangles.forEach((rectangle, index, arr) => {
    const area = rectangleArea(...rectangle);
    if (index < arr.length - 1) {
      result += `${area}, `
    } else {
      result += `${area}. `
    }
  });
  console.log(result);
};

triangleArea();
