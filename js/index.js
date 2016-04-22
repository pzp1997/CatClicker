var $catImg = document.getElementsByClassName('cat-img')[0],
    $counter = document.getElementsByClassName('counter')[0],
    count = 0;

$catImg.addEventListener('click', function () {
  $counter.innerHTML = ++count;
});
