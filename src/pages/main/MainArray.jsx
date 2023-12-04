import React from 'react';
import * as S from './Main.styles';

export const MainArray = [
	{
		id: 4,
		path: '/yoga',
		name: <S.ExerciseName>Йога</S.ExerciseName>,
		img: (
			<svg
				width='100%'
				height='100%'
				viewBox='0 0 360 480'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g clipPath='url(#clip0_26_1253)'>
					<rect width='360' height='480' rx='29.9978' fill='white'></rect>
					<path
						d='M31 331.5C31 311.342 47.3416 295 67.5 295C87.6584 295 104 311.342 104 331.5V393.5C104 413.658 87.6584 430 67.5 430C47.3416 430 31 413.658 31 393.5V331.5Z'
						fill='#AD61FF'
					></path>
					<path
						d='M209.157 157.76C219.149 139.771 241.832 133.288 259.821 143.28C277.811 153.272 284.293 175.955 274.301 193.944L195.816 335.244C185.824 353.233 163.141 359.716 145.152 349.724C127.163 339.732 120.68 317.049 130.672 299.06L209.157 157.76Z'
						fill='#9A48F1'
					></path>
					<path
						d='M252.907 231.746C262.759 214.007 285.127 207.613 302.866 217.466C320.606 227.318 327 249.686 317.147 267.425L212.013 456.72C202.161 474.46 179.793 480.853 162.053 471.001C144.314 461.148 137.92 438.78 147.772 421.041L252.907 231.746Z'
						fill='#AD61FF'
					></path>
					<path
						d='M251 396.5C251 376.342 267.342 360 287.5 360C307.658 360 324 376.342 324 396.5V480H251V396.5Z'
						fill='#AD61FF'
					></path>
					<g filter='url(#filter0_b_26_1253)'>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M30 0C13.4315 0 0 13.4315 0 30V450C0 466.569 13.4315 480 30 480H330C346.569 480 360 466.569 360 450V30C360 13.4315 346.569 0 330 0H30ZM250 130C250 113.431 263.431 100 280 100H300C316.569 100 330 113.431 330 130V380H250H170H90H30V280C30 263.431 43.4315 250 60 250C76.5685 250 90 263.431 90 280V230C90 213.431 103.431 200 120 200H140C156.569 200 170 213.431 170 230V190C170 173.431 183.431 160 200 160H220C236.569 160 250 173.431 250 190V130Z'
							fill='#CDCDCD'
							fillOpacity='0.1'
						></path>
					</g>
					<S.ExerciseG opacity='0.36' filter='url(#filter1_i_26_1253)'>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M280 100C263.431 100 250 113.431 250 130V190C250 173.431 236.569 160 220 160H200C183.431 160 170 173.431 170 190V230C170 213.431 156.569 200 140 200H120C103.431 200 90 213.431 90 230V280C90 263.431 76.5685 250 60 250C43.4315 250 30 263.431 30 280V380H90H170H250H330V130C330 113.431 316.569 100 300 100H280Z'
							fill='white'
						></path>
					</S.ExerciseG>
				</g>
				<defs>
					<filter
						id='filter0_b_26_1253'
						x='-29.0373'
						y='-29.0373'
						width='418.075'
						height='538.075'
						filterUnits='userSpaceOnUse'
						colorInterpolationFilters='sRGB'
					>
						<feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
						<feGaussianBlur
							in='BackgroundImageFix'
							stdDeviation='14.5187'
						></feGaussianBlur>
						<feComposite
							in2='SourceAlpha'
							operator='in'
							result='effect1_backgroundBlur_26_1253'
						></feComposite>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_backgroundBlur_26_1253'
							result='shape'
						></feBlend>
					</filter>
					<filter
						id='filter1_i_26_1253'
						x='30'
						y='100'
						width='312'
						height='292'
						filterUnits='userSpaceOnUse'
						colorInterpolationFilters='sRGB'
					>
						<feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='BackgroundImageFix'
							result='shape'
						></feBlend>
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						></feColorMatrix>
						<feOffset dx='12' dy='12'></feOffset>
						<feGaussianBlur stdDeviation='6.5'></feGaussianBlur>
						<feComposite
							in2='hardAlpha'
							operator='arithmetic'
							k2='-1'
							k3='1'
						></feComposite>
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.678431 0 0 0 0 0.380392 0 0 0 0 1 0 0 0 0.5 0'
						></feColorMatrix>
						<feBlend
							mode='normal'
							in2='shape'
							result='effect1_innerShadow_26_1253'
						></feBlend>
					</filter>
					<clipPath id='clip0_26_1253'>
						<rect width='360' height='480' rx='29.9978' fill='white'></rect>
					</clipPath>
				</defs>
			</svg>
		),
	},
	{
		id: 3,
		path: '/stratching',
		name: <S.ExerciseName>Стретчинг</S.ExerciseName>,
		img: (
			<svg
				width='100%'
				height='100%'
				viewBox='0 0 360 480'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g clipPath='url(#clip0_26_1290)'>
					<rect width='360' height='480' rx='29.9978' fill='white'></rect>
					<circle
						cx='272.526'
						cy='163.916'
						r='69.5956'
						transform='rotate(35.3222 272.526 163.916)'
						fill='#565EEF'
					></circle>
					<circle
						cx='88.3074'
						cy='295.769'
						r='69.5956'
						transform='rotate(35.3222 88.3074 295.769)'
						fill='#565EEF'
					></circle>
					<rect
						x='228.016'
						y='217.45'
						width='139.191'
						height='140.953'
						transform='rotate(35.3222 228.016 217.45)'
						fill='#333BCB'
					></rect>
					<g filter='url(#filter0_b_26_1290)'>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M30 0C13.4315 0 0 13.4315 0 30V450C0 466.569 13.4315 480 30 480H330C346.569 480 360 466.569 360 450V30C360 13.4315 346.569 0 330 0H30ZM230 160C174.772 160 130 204.772 130 260V390H330V260C330 204.772 285.228 160 230 160Z'
							fill='#CDCDCD'
							fillOpacity='0.1'
						></path>
					</g>
					<S.ExerciseG opacity='0.36' filter='url(#filter1_i_26_1290)'>
						<path
							d='M130 260C130 204.772 174.772 160 230 160C285.228 160 330 204.772 330 260V390H130V260Z'
							fill='white'
						></path>
					</S.ExerciseG>
				</g>
				<defs>
					<filter
						id='filter0_b_26_1290'
						x='-29.0373'
						y='-29.0373'
						width='418.075'
						height='538.075'
						filterUnits='userSpaceOnUse'
						colorInterpolationFilters='sRGB'
					>
						<feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
						<feGaussianBlur
							in='BackgroundImageFix'
							stdDeviation='14.5187'
						></feGaussianBlur>
						<feComposite
							in2='SourceAlpha'
							operator='in'
							result='effect1_backgroundBlur_26_1290'
						></feComposite>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_backgroundBlur_26_1290'
							result='shape'
						></feBlend>
					</filter>
					<filter
						id='filter1_i_26_1290'
						x='130'
						y='160'
						width='211.222'
						height='241.222'
						filterUnits='userSpaceOnUse'
						colorInterpolationFilters='sRGB'
					>
						<feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='BackgroundImageFix'
							result='shape'
						></feBlend>
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						></feColorMatrix>
						<feOffset dx='11.2216' dy='11.2216'></feOffset>
						<feGaussianBlur stdDeviation='6.07837'></feGaussianBlur>
						<feComposite
							in2='hardAlpha'
							operator='arithmetic'
							k2='-1'
							k3='1'
						></feComposite>
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.337255 0 0 0 0 0.368627 0 0 0 0 0.937255 0 0 0 0.5 0'
						></feColorMatrix>
						<feBlend
							mode='normal'
							in2='shape'
							result='effect1_innerShadow_26_1290'
						></feBlend>
					</filter>
					<clipPath id='clip0_26_1290'>
						<rect width='360' height='480' rx='29.9978' fill='white'></rect>
					</clipPath>
				</defs>
			</svg>
		),
	},
	{
		id: 1,
		path: '/dancefitness',
		name: <S.ExerciseName>Танцевальный фитнес</S.ExerciseName>,
		img: (
			<svg
				width='100%'
				height='100%'
				viewBox='0 0 360 480'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g clipPath='url(#clip0_26_1275)'>
					<rect width='360' height='480' rx='29.9978' fill='white'></rect>
					<path
						d='M303.398 400.021C308.921 409.587 305.643 421.819 296.077 427.341L259.316 448.565C249.751 454.088 237.519 450.811 231.996 441.245L175.285 343.019C169.762 333.453 173.04 321.221 182.606 315.698L219.367 294.474C228.932 288.952 241.164 292.229 246.687 301.795L303.398 400.021Z'
						fill='#FF9E00'
					></path>
					<path
						d='M171.248 284.606C154.849 282.241 143.472 267.03 145.837 250.631L153.303 198.861C155.668 182.462 170.879 171.085 187.278 173.45L386.835 202.228C403.234 204.593 414.61 219.804 412.245 236.203L404.78 287.974C402.415 304.373 387.204 315.75 370.805 313.385L171.248 284.606Z'
						fill='#FFB53D'
					></path>
					<g filter='url(#filter0_b_26_1275)'>
						<path
							className='blur'
							fillRule='evenodd'
							clipRule='evenodd'
							d='M30 0C13.4315 0 0 13.4315 0 30V450C0 466.569 13.4315 480 30 480H330C346.569 480 360 466.569 360 450V30C360 13.4315 346.569 0 330 0H30ZM317.474 306.695C317.474 315.531 310.31 322.695 301.474 322.695H266.826C257.989 322.695 250.826 329.858 250.826 338.695V373.343C250.826 382.179 243.662 389.343 234.826 389.343H145.648C136.811 389.343 129.648 382.179 129.648 373.343V338.695C129.648 329.858 122.484 322.695 113.648 322.695H79C70.1635 322.695 63 315.531 63 306.695L63 217.517C63 208.68 70.1635 201.517 79 201.517H113.648C122.484 201.517 129.648 194.353 129.648 185.517V150.869C129.648 142.033 136.811 134.869 145.648 134.869L234.826 134.869C243.662 134.869 250.826 142.033 250.826 150.869V185.517C250.826 194.353 257.989 201.517 266.826 201.517H301.474C310.31 201.517 317.474 208.68 317.474 217.517V306.695Z'
							fill='#CDCDCD'
							fillOpacity='0.1'
						></path>
					</g>
					<S.ExerciseG opacity='0.36' filter='url(#filter1_i_26_1275)'>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M301.474 322.695C310.31 322.695 317.474 315.531 317.474 306.695L317.474 217.517C317.474 208.68 310.31 201.517 301.474 201.517L266.826 201.517C257.989 201.517 250.826 194.353 250.826 185.517L250.826 150.869C250.826 142.032 243.662 134.869 234.826 134.869L145.648 134.869C136.811 134.869 129.648 142.032 129.648 150.869L129.648 185.517C129.648 194.353 122.484 201.517 113.648 201.517L79 201.517C70.1635 201.517 63 208.68 63 217.517L63 306.695C63 315.531 70.1635 322.695 79 322.695L113.648 322.695C122.484 322.695 129.648 329.858 129.648 338.695L129.648 373.343C129.648 382.179 136.811 389.343 145.648 389.343L234.826 389.343C243.662 389.343 250.826 382.179 250.826 373.343L250.826 338.695C250.826 329.858 257.989 322.695 266.826 322.695L301.474 322.695Z'
							fill='white'
						></path>
					</S.ExerciseG>
				</g>
				<defs>
					<filter
						id='filter0_b_26_1275'
						x='-29.0373'
						y='-29.0373'
						width='418.075'
						height='538.075'
						filterUnits='userSpaceOnUse'
						colorInterpolationFilters='sRGB'
					>
						<feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
						<feGaussianBlur
							in='BackgroundImageFix'
							stdDeviation='14.5187'
						></feGaussianBlur>
						<feComposite
							in2='SourceAlpha'
							operator='in'
							result='effect1_backgroundBlur_26_1275'
						></feComposite>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_backgroundBlur_26_1275'
							result='shape'
						></feBlend>
					</filter>
					<filter
						id='filter1_i_26_1275'
						x='63'
						y='134.869'
						width='264.989'
						height='264.989'
						filterUnits='userSpaceOnUse'
						colorInterpolationFilters='sRGB'
					>
						<feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='BackgroundImageFix'
							result='shape'
						></feBlend>
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						></feColorMatrix>
						<feOffset dx='10.5156' dy='10.5156'></feOffset>
						<feGaussianBlur stdDeviation='5.69592'></feGaussianBlur>
						<feComposite
							in2='hardAlpha'
							operator='arithmetic'
							k2='-1'
							k3='1'
						></feComposite>
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 1 0 0 0 0 0.427451 0 0 0 0 0 0 0 0 0.5 0'
						></feColorMatrix>
						<feBlend
							mode='normal'
							in2='shape'
							result='effect1_innerShadow_26_1275'
						></feBlend>
					</filter>
					<clipPath id='clip0_26_1275'>
						<rect width='360' height='480' rx='29.9978' fill='white'></rect>
					</clipPath>
				</defs>
			</svg>
		),
	},
	{
		id: 2,
		path: '/stepaerobics',
		name: <S.ExerciseName>Степ-аэробика</S.ExerciseName>,
		img: (
			<svg
				width='100%'
				height='100%'
				viewBox='0 0 360 480'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g clipPath='url(#clip0_26_1300)'>
					<rect width='360' height='480' rx='29.9978' fill='white'></rect>
					<rect
						x='170.45'
						y='133'
						width='273.699'
						height='106.502'
						rx='53.251'
						transform='rotate(30 170.45 133)'
						fill='#E1FF8F'
					></rect>
					<circle
						cx='151.467'
						cy='345.175'
						r='85.4442'
						transform='rotate(35.3222 151.467 345.175)'
						fill='#BCEC30'
					></circle>
					<g className='blur' filter='url(#filter0_b_26_1300)'>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M-146 0C-162.569 0 -176 13.4315 -176 30V450C-176 466.569 -162.569 480 -146 480H354C370.569 480 384 466.569 384 450V30C384 13.4315 370.569 0 354 0H-146ZM67.5234 247.126C67.5234 219.514 89.9074 197.13 117.52 197.13H272.966C300.578 197.13 322.962 219.514 322.962 247.126C322.962 263.424 315.164 277.9 303.096 287.027C315.164 296.154 322.962 310.63 322.962 326.928C322.962 354.54 300.578 376.924 272.966 376.924H117.52C89.9075 376.924 67.5234 354.54 67.5234 326.928C67.5234 310.63 75.3213 296.154 87.3895 287.027C75.3213 277.9 67.5234 263.424 67.5234 247.126Z'
							fill='#CDCDCD'
							fillOpacity='0.1'
						></path>
					</g>
					<S.ExerciseG opacity='0.36' filter='url(#filter1_i_26_1300)'>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M117.52 197.13C89.9074 197.13 67.5234 219.514 67.5234 247.126C67.5234 263.424 75.3213 277.9 87.3895 287.027C75.3213 296.154 67.5234 310.63 67.5234 326.928C67.5234 354.54 89.9075 376.924 117.52 376.924H272.966C300.578 376.924 322.962 354.54 322.962 326.928C322.962 310.63 315.164 296.154 303.096 287.027C315.164 277.9 322.962 263.424 322.962 247.126C322.962 219.514 300.578 197.13 272.966 197.13H117.52Z'
							fill='white'
						></path>
					</S.ExerciseG>
				</g>
				<defs>
					<filter
						id='filter0_b_26_1300'
						x='-205.037'
						y='-29.0373'
						width='618.075'
						height='538.075'
						filterUnits='userSpaceOnUse'
						colorInterpolationFilters='sRGB'
					>
						<feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
						<feGaussianBlur
							in='BackgroundImageFix'
							stdDeviation='14.5187'
						></feGaussianBlur>
						<feComposite
							in2='SourceAlpha'
							operator='in'
							result='effect1_backgroundBlur_26_1300'
						></feComposite>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_backgroundBlur_26_1300'
							result='shape'
						></feBlend>
					</filter>
					<filter
						id='filter1_i_26_1300'
						x='67.5234'
						y='197.13'
						width='266.66'
						height='191.015'
						filterUnits='userSpaceOnUse'
						colorInterpolationFilters='sRGB'
					>
						<feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='BackgroundImageFix'
							result='shape'
						></feBlend>
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						></feColorMatrix>
						<feOffset dx='11.2216' dy='11.2216'></feOffset>
						<feGaussianBlur stdDeviation='6.07837'></feGaussianBlur>
						<feComposite
							in2='hardAlpha'
							operator='arithmetic'
							k2='-1'
							k3='1'
						></feComposite>
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.270588 0 0 0 0 0.466667 0 0 0 0 0 0 0 0 0.5 0'
						></feColorMatrix>
						<feBlend
							mode='normal'
							in2='shape'
							result='effect1_innerShadow_26_1300'
						></feBlend>
					</filter>
					<clipPath id='clip0_26_1300'>
						<rect width='360' height='480' rx='29.9978' fill='white'></rect>
					</clipPath>
				</defs>
			</svg>
		),
	},
	{
		id: 0,
		path: '/bodyflex',
		name: <S.ExerciseName>Бодифлекс</S.ExerciseName>,
		img: (
			<svg
				width='100%'
				height='100%'
				viewBox='0 0 360 480'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g clipPath='url(#clip0_26_1322)'>
					<rect width='360' height='480' rx='29.9978' fill='white'></rect>
					<rect
						x='155.522'
						y='188.658'
						width='143.394'
						height='134.959'
						rx='12.4698'
						transform='rotate(-22.7913 155.522 188.658)'
						fill='#6EE4FE'
					></rect>
					<rect
						x='97.4746'
						y='276.05'
						width='165.289'
						height='155.566'
						rx='12.4698'
						transform='rotate(14.6993 97.4746 276.05)'
						fill='#00C1FF'
					></rect>
					<g filter='url(#filter0_b_26_1322)'>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M30 0C13.4315 0 0 13.4315 0 30V450C0 466.569 13.4315 480 30 480H330C346.569 480 360 466.569 360 450V30C360 13.4315 346.569 0 330 0H30ZM213.164 198.485C211.813 199.395 210.045 199.395 208.694 198.485L145.302 155.778C129.36 145.039 107.892 156.462 107.892 175.683L107.892 361.178C107.892 380.399 129.36 391.822 145.302 381.082L208.698 338.373C210.049 337.463 211.817 337.463 213.168 338.373L276.56 381.08C292.501 391.819 313.969 380.397 313.969 361.175L313.969 175.68C313.969 156.459 292.501 145.036 276.56 155.776L213.164 198.485Z'
							fill='#CDCDCD'
							fillOpacity='0.1'
						></path>
					</g>
					<S.ExerciseG opacity='0.3' filter='url(#filter1_i_26_1322)'>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M208.694 198.485C210.045 199.395 211.813 199.395 213.164 198.485L276.56 155.776C292.501 145.036 313.969 156.459 313.969 175.68L313.969 361.175C313.969 380.397 292.501 391.819 276.56 381.08L213.168 338.373C211.817 337.463 210.049 337.463 208.698 338.373L145.302 381.082C129.36 391.822 107.892 380.399 107.892 361.178L107.892 175.683C107.892 156.462 129.36 145.039 145.302 155.778L208.694 198.485Z'
							fill='white'
						></path>
					</S.ExerciseG>
				</g>
				<defs>
					<filter
						id='filter0_b_26_1322'
						x='-20'
						y='-20'
						width='400'
						height='520'
						filterUnits='userSpaceOnUse'
						colorInterpolationFilters='sRGB'
					>
						<feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
						<feGaussianBlur
							in='BackgroundImageFix'
							stdDeviation='10'
						></feGaussianBlur>
						<feComposite
							in2='SourceAlpha'
							operator='in'
							result='effect1_backgroundBlur_26_1322'
						></feComposite>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_backgroundBlur_26_1322'
							result='shape'
						></feBlend>
					</filter>
					<filter
						id='filter1_i_26_1322'
						x='107.892'
						y='151.64'
						width='216.077'
						height='243.579'
						filterUnits='userSpaceOnUse'
						colorInterpolationFilters='sRGB'
					>
						<feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='BackgroundImageFix'
							result='shape'
						></feBlend>
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						></feColorMatrix>
						<feOffset dx='10' dy='10'></feOffset>
						<feGaussianBlur stdDeviation='5.5'></feGaussianBlur>
						<feComposite
							in2='hardAlpha'
							operator='arithmetic'
							k2='-1'
							k3='1'
						></feComposite>
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.219608 0 0 0 0 0.737255 0 0 0 0 0.929412 0 0 0 1 0'
						></feColorMatrix>
						<feBlend
							mode='normal'
							in2='shape'
							result='effect1_innerShadow_26_1322'
						></feBlend>
					</filter>
					<clipPath id='clip0_26_1322'>
						<rect width='360' height='480' rx='29.9978' fill='white'></rect>
					</clipPath>
				</defs>
			</svg>
		),
	},
];
