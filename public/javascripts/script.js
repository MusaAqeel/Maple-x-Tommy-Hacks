function code_rain() {
    var canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');
    const w = window.outerWidth;
    const h = window.outerHeight;
    canvas.width = w;
    canvas.height = h;
    const charWidth = 20;
    const charHeight = 16;
    const cols = Math.floor(w / charWidth) + 1;
    const rows = Math.floor(h / charHeight) + 1;

    // Initialise arrays for code rain
    var chars = Array(cols);
    for (var i = 0; i < cols; i++) {
        chars[i] = new Array(rows);
        for (var j = 0; j < rows; j++) {
            chars[i][j] = [32, 255];
        }
    }

    var rain = Array(5 * Math.floor(Math.log(cols)));
    for (var i = 0; i < rain.length; i++) {
        rain[i] = [Math.round(Math.random() * cols), Math.round(-1 * Math.random() * rows)];
    }

    ctx.font = '16px monospace';

    // Draw the grid to form the code rain
    function drawGrid() {
        ctx.clearRect(0, 0, w, h);

        for (var i = 0; i < cols; i++) {
            for (var j = 0; j < rows; j++) {
		// Find rain droplets
                var rainy = false;
                for (var k = 0; k < rain.length; k++) {
                    if (rain[k][0] == i && rain[k][1] == j) {
                        rainy = true;
                        break;
                    }
                }

		// Update rain droplets and their trails
                if (rainy) {
                    chars[i][j][0] = Math.round(Math.random() * 95 + 32);
                    chars[i][j][1] = 255;
                    ctx.fillStyle = '#ffffffff';
                } else {
                    ctx.fillStyle = '#1ee113' + chars[i][j][1].toString(16);
                }
                ctx.fillText(String.fromCharCode(chars[i][j][0]), i * charWidth, j * charHeight);

                chars[i][j][1] = Math.max(chars[i][j][1] - 10, 0);
                if (chars[i][j][1] < 20) {
                    chars[i][j][0] = 32;
                }
            }
        }

	// Move the rain down
        for (var i = 0; i < rain.length; i++) {
            rain[i][1] += 1;
            if (rain[i][1] > rows) {
                rain[i] = [Math.round(Math.random() * cols), 0];
            }
        }
    }

    return setInterval(drawGrid, 100);
}

function setup() {
    // Reset code rain
    var interval = code_rain();
    window.onresize = function() {
        clearInterval(interval);
        interval = code_rain();
    }

    // Show status of database request
    if (window.location.hash) {
        console.log(window.location.hash);
        var hash = window.location.hash.substring(1);
        if (hash == 'success') {
            document.getElementById('successIndicator').innerHTML = 'Success!';
        } else if (hash == 'error') {
            document.getElementById('successIndicator').innerHTML = 'An error occurred; please try again later.';
        }
    }
}

window.onload = setup;

function updateBackground() {
    var background = document.getElementById('bg');
    var matrix = document.getElementById('matrix');
    if (window.pageYOffset > 100) {
        background.classList.add('transparent');
        matrix.classList.add('transparent');
    } else {
        background.classList.remove('transparent');
        matrix.classList.remove('transparent');
    }
}

function updateNavbar() {
    var navbar = document.getElementById('navbar');
    if (window.pageYOffset > 56) {
        navbar.classList.add('black');
    } else {
        navbar.classList.remove('black');
    }
}

window.addEventListener('scroll', updateBackground);
window.addEventListener('scroll', updateNavbar);
