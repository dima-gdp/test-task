function drawRating(vote) {
	const rating = Math.ceil(vote / 20)

	if (rating) {
		return '★'.repeat(rating) + '☆'.repeat(5 - rating)
	}
	else {
		return '☆☆☆☆☆'
	}

}

// Проверка работы результата
console.log(drawRating(0)); // ★☆☆☆☆
console.log(drawRating(1)); // ★☆☆☆☆
console.log(drawRating(50)); // ★★★☆☆
console.log(drawRating(99)); // ★★★★★

