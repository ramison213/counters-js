// 5 квадратов внутри каждого из которых изначально вписана цифра 0,
// при клике на любой квадрат цифра в нем увеличивается на один

const $counters = document.querySelectorAll('.counter');

$counters.forEach($counter => {
	$counter.addEventListener('click', () => {
		$counter.textContent++;
	})
})

const $buttons = document.querySelectorAll('.plus, .minus');

$buttons.forEach($btn => {
	$btn.addEventListener('click', () => {
		const $count = $btn.closest('.count-wrap').querySelector('.count');

		if ($btn.classList.contains('plus')) {
			$count.textContent++;
		} else {
			$count.textContent--;
		}
	})
})