async function countdown() {
    const target = Math.floor(Math.random() * 10) + 1;
    console.log(`Counting down to ${target}...`);
    for (let i = target; i >= 0; i--) {
      console.log(i);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    console.log('Done!');
  }
countdown()  