const promise = () =>
  new Promise(res => {
    res('resolve');
  });

const asyncAwait = async () => {
  console.log('async await');

  try {
    const data = await promise();
    console.log(`${data} from async await`);
  } catch (error) {
    console.log(`async await ${error}`);
  }
  console.log('async await continues');
};

const thenCatch = async () => {
  console.log('then catch');
  promise()
    .then(res => {
      console.log(`${res} from then catch`);
    })
    .catch(error => {
      console.log(`then catch ${error}`);
    });
  console.log('then catch continues');
};

console.clear();
asyncAwait();
thenCatch();
