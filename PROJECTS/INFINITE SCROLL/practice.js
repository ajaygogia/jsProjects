let list = document.getElementById('infinite-scroll');
let loading = false;
let count = 0;

if (list) {
    expandList();
    window.addEventListener('scroll', () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight && !loading) {
            loading = true;
            let isLoading = document.createElement('p');
            if (count < 100) {
                isLoading.textContent = 'Loading...';
            } else {
                isLoading.textContent = 'End of the list';
            }
            isLoading.style.fontSize = '20px';
            list.appendChild(isLoading);
            if (count < 100) {
                setTimeout(() => {
                    list.removeChild(isLoading);
                    expandList();
                }, 1000);
            }
        }
    });
}

function expandList() {
    for (let i = 0; i < 20; i++) {
        count++;
        let listItem = document.createElement('li');
        listItem.textContent = 'Infinite Scroll ' + count;
        list.appendChild(listItem);
    }
    loading = false;
}