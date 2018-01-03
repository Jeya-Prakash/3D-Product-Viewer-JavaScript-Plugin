var call = 0;

function pdt360DegViewer(id, n, p, t, draggable, mouseMove, scroll, keys) {
    call++;
    loaderNone(id);
    var i = 1, j = 0, move = [],
        mainDiv = document.querySelector(`#${id}`);
    mainDiv.className = 'viewer';
    mainDiv.innerHTML =
        '<div class="loader"><div class="three-bounce"><div class="one"></div><div class="two"></div><div class="three"></div></div></div>'
    mainDiv.innerHTML += `<img class="${id}" draggable='false' src='${p}${i}.${t}'>`;

    if (call == 1)
        for (var k = 1; k <= n; k++) {
            document.getElementById('dummy').innerHTML += `<img src='${p}${k}.${t}'>`;
        }

    var img = document.querySelector(`#${id} .${id}`);
    if (window.matchMedia("screen and (max-width: 992px)").matches)
        touchFun();
    else
        nonTouch();
    var touch = false;
    //For Touch Devices
    window.addEventListener('touchstart', function () {
        touchFun();
    });

    function touchFun() {
        touch = true;
        img.removeAttribute('draggable');
        img.addEventListener('touchmove', function (e) {
            logic(this, e);
        });
        img.addEventListener('touchend', function (e) {
            move = [];
        });
    }
    //For Non-Touch Devices
    function nonTouch() {
        touch = false;
        if (draggable) {
            var drag = false;
            img.addEventListener('mousedown', function (e) {
                drag = true;
                logic(this, e);
            });
            img.addEventListener('mouseup', function (e) {
                drag = false;
                move = [];
            });
            mouseEvent();
        }

        if (mouseMove) {
            drag = true;
            mouseEvent();
        }
        function mouseEvent() {
            img.addEventListener('mousemove', function (e) {
                if (drag)
                    logic(this, e);
            });
            img.addEventListener('mouseleave', function () {
                move = [];
            });
        }
        if (scroll) {
            img.addEventListener('wheel', function (e) {
                e.preventDefault();
                if (e.wheelDelta / 120 > 0)
                    nxt(this);
                else
                    prev(this);
            });
        }
        if (keys) {
            window.onkeydown = function (e) {
                if (e.keyCode == 37 || e.keyCode == 38)
                    prev(img);
                else if (e.keyCode == 39 || e.keyCode == 40)
                    nxt(img);
            };
        }
    }
    function logic(el, e) {
        j++;

        if (touch)
            var x = e.touches[0].clientX;
        else
            var x = e.clientX;

        var coord = (x - img.offsetLeft);
        move.push(coord);

        var l = move.length,
            oldMove = move[l - 2],
            newMove = move[l - 1];
        if (!(j % 3)) {
            if (newMove > oldMove)
                nxt(el);
            else if (newMove < oldMove)
                prev(el);
        }
    }
    function prev(e) {
        if (i <= 1) {
            i = n;
            e.src = `${p}${--i}.${t}`;
            nxt(e);
        } else
            e.src = `${p}${--i}.${t}`;
    }
    function nxt(e) {
        if (i >= n) {
            i = 1;
            e.src = `${p}${++i}.${t}`;
            prev(e);
        } else
            e.src = `${p}${++i}.${t}`;
    }
    function loaderNone(id) {
        setTimeout(function () {
            document.querySelector(`#${id} .loader`).style.display = 'none';
        }, 3000);
    }
}