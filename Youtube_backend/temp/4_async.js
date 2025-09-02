// Async/Await : used for handling asynchronous operations in a more manageable way.


const abc = async () => {
    const blob = await fetch("https://example.com/data");
    const data = await blob.json();
    const time = setTimeout(() => {
        console.log(data, "Data getting Success");
    }, 1000);
};