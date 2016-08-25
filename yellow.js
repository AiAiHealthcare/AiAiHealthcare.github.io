!
function() {
	function t() {
		y = new r, i()
	}
	function i() {
		var t = 0,
			i = I;
		for (t; i > t; ++t) {
			var n = t / i,
				o = new u(2 * Math.random()),
				e = 200 * Math.random() + 300;
			o.position.x = Math.cos(n * (2 * Math.PI)) * e + p >> 1, o.position.y = Math.sin(n * (2 * Math.PI)) * e + m >> 1, o.direction.setAngle(n * (2 * Math.PI)), P.push(o)
		}
	}
	function n() {
		w.globalAlpha = F, w.fillStyle = R, w.fillRect(0, 0, p, m), w.globalAlpha = 1, e(), o(), s(), x += .02, A += .04, v += .05 * Math.cos(.1 * A), getAnimationFrame(n)
	}
	function o() {
		y.position.x = Math.cos(v) * y.distance + p >> 1, y.position.y = Math.sin(v) * y.distance + m >> 1, y.update()
	}
	function e() {
		var t = P.length - 1;
		for (t; t > -1; --t) {
			var i = P[t];
			i.update()
		}
	}
	function s() {
		var t = P.length - 1;
		for (t; t > -1; --t) {
			var i = P[t];
			w.fillStyle = i.color, w.beginPath(), w.arc(i.position.x, i.position.y, i.radius, 0, M), i.radius < 1 ? Math.random() > .85 && w.fill() : w.fill(), w.closePath()
		}
	}
	function a(t, i) {
		return t.getDx() * i.getDx() + t.getDy() * i.getDy()
	}
	function h(t, i) {
		this.x = t || 1, this.y = i || 0
	}
	function r() {
		this.position = new h, this.direction = new h, this.radius = 40, this.color = "#fe5a64", this.distance = 700
	}
	function u(t) {
		this.planetToSunVector = new h, this.position = new h, this.direction = new h, this.radius = t || 6, this.fixedRadius = t || 6, this.color = "rgb(255, 255, 255)", this.color = "rgb(0, 100, 255)", this.distance = 200, this.randomAngle = Math.random() * M
	}
	function c(t, i, n, o) {
		return t /= o / 2, 1 > t ? n / 2 * t * t * t + i : (t -= 2, n / 2 * (t * t * t + 2) + i)
	}
	function d(t, i, n) {
		return (t - i) / (n - i)
	}
	function l(t, i, n) {
		return (n - i) * t + i
	}
	function f(t, i, n, o, e) {
		return l(d(t, i, n), o, e)
	}
	var g, w, p, m, y, M = 2 * Math.PI,
		x = 0,
		A = 0,
		v = 0,
		R = "#ffd740",
		b = 14,
		F = .2,
		q = 69,
		D = 97,
		L = .33,
		P = [],
		I = 600;
	window.onload = function() {
		g = document.getElementById("canvas"), w = g.getContext("2d"), window.onresize = function() {
			p = window.innerWidth, m = window.innerHeight, g.width = p, g.height = m, w.fillStyle = R, w.fillRect(0, 0, p, m), P = [], t()
		}, window.onresize(), t(), n()
	}, window.getAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
	function(t) {
		window.setTimeout(t, 16.6)
	}, h.prototype = {
		constructor: h,
		getAngle: function() {
			return Math.atan2(this.y, this.x)
		},
		setAngle: function(t) {
			var i = this.getLength();
			this.x = Math.cos(t) * i, this.y = Math.sin(t) * i
		},
		getLength: function() {
			return Math.sqrt(this.x * this.x + this.y * this.y)
		},
		setLength: function(t) {
			var i = this.getAngle();
			this.x = Math.cos(i) * t, this.y = Math.sin(i) * t
		},
		getDx: function() {
			return this.x / this.getLength()
		},
		getDy: function() {
			return this.y / this.getLength()
		},
		getLeftNormal: function() {
			return new h(this.y, -this.x)
		},
		getRightNormal: function() {
			return new h(-this.y, this.x)
		}
	}, r.prototype = {
		constructor: r,
		update: function() {
			var t = this.position.x - (p >> 1),
				i = this.position.y - (m >> 1);
			this.direction.setAngle(Math.atan2(i, t))
		}
	}, u.prototype = {
		constructor: u,
		update: function() {
			var t = this.position.x - y.position.x,
				i = this.position.y - y.position.y,
				n = new h;
			n.setAngle(Math.atan2(i, t));
			var o = a(this.direction, n);
			if (0 > o) {
				var e = f(o, 0, -1, 0, 1);
				this.radius = c(e, 0, b, 1)
			} else this.radius = this.fixedRadius;
			var s = f(o, -1, 1, q, 20),
				r = f(o, -1, 1, Math.cos(A) * D, 20);
			this.color = this.radius > 1.4 ? "rgb(" + (s >> 0) + ", " + (r >> 0) + ", 100)" : "rgb(255, 255, 255)", this.position.x += Math.cos(x + this.randomAngle) * L, this.position.y += Math.sin(A + this.randomAngle) * L
		}
	}
}();