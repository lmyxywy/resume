<template>
	<div class="index" v-cloak>
		<div class="index_child index_left">
			<div class="index_child_inner">
				<div class="index_left_top">
					<div class="index_video_wrap">
						<!-- <div class="index_video_top" v-show="videoSrcName === 'cloud' && !showImg"></div>	 -->
						<img :src="require(`@/assets/index_left_top_img.jpg`)" alt="" class="index_video_bg" :class="{active:!showImg}">
						<video :src="`./static/house.mp4`" autoplay="autoplay" loop="loop" muted class="index_video" ref="video1"
						 v-show="videoSrcName === 'house'"></video>

						<video :src="`./static/lake.mp4`" autoplay="autoplay" loop="loop" muted class="index_video" ref="video2"
						 v-show="videoSrcName === 'cloud'"></video>
					</div>

					<div class="index_avartar">
						<img :src="require(`@/assets/avartar.png`)" alt="">
					</div>

				</div>

				<div class="index_infro">
					<div class="index_infor_line">
						<div class="content">
							<span class="index_infor_b_word">李女士</span>
							<i class="index_infor_s_word">女 1992</i>
						</div>
					</div>
					<div class="content">
						<p>微信号：qgyjhl</p>
						<p>（工作日09:00 - 17:00）</p>
					</div>
				</div>

				<div class="index_word_list">
					<div class="word_list_wrap">
						<div class="word_list_line"></div>
						<div class="word_list_inner">
							<ul class="word_list">
								<li v-for="(info ,index) in infos" v-if="index < 3">
									<div class="circle_wrap">
										<div class="circle_inner"></div>
									</div>
									<div class="word_block">
										<div class="word_title" @click="$router.push({name:'intro'});">
											<div class="triangle"></div>
											<div class="word_title_txt">
												{{info.tit}}
											</div>
										</div>
										<div class="word_body word_border" v-for="(contents ,index2) in info.content">
											<div class="word_row" v-for="(content ,index3) in contents">
												<span v-if="index !== 2" class="word_row_tit">{{content.tip}}：</span> <span v-html="content.detail"></span>
											</div>
										</div>
									</div>
								</li>

							</ul>
						</div>

					</div>
				</div>
				<img :src="require(`@/assets/index_left_bottom_img.png`)" alt="" class="index_left_bottom">
			</div>
		</div>

		<div class="index_child index_right">
			<div class="index_child_inner">
				<img :src="require(`@/assets/index_right_top_logo.jpg`)" alt="" style="width:100%;vertical-align:bottom;">
				<div class="index_right_top">
					<img :src="require(`@/assets/index_right_top_book_img.jpg`)" alt="" class="index_right_book">
					<div class="index_right_top_word">
						<div class="index_right_top_title">
							【<span>2014.12 - 至今</span>】
						</div>
						<div class="index_right_top_body">
							2012年因兴趣开始接触自学photoshop，后又自学了Html、Css、Js，Less，Vue.js等Web前端技术，此后不断探索，渐渐发现学习路上所有的动力便是兴趣与好奇，兴趣便是最好的老师。
						</div>
					</div>
					<div style="both:clear;"></div>
				</div>
				<div class="index_tab">
					<div class="tab_btn">
						<span :class="{'active':tabIndex === 1 }" @mouseover="tabHover(1)">Web作品</span>
						<span :class="{'active':tabIndex === 0 }" @mouseover="tabHover(0)">设计作品</span>
					</div>
					<div class="tab_body">
						<div class="tab_body_inner">

							<ul v-if="tabIndex === 1">
								<li v-for="(web ,index) in webs" @click="tabClick(1,index)">
									<div class="show_block_top">
										<img :src="require(`@/assets/index_right_bottom_icon.png`)" alt="" class="show_icon">
										<div class="show_block_inner">
											<img v-lazy="require(`@/assets/itemImgs/${web.srcCut}.jpg`)" alt="">
										</div>
									</div>
									<div class="show_block_bottom">
										{{web.name}}
									</div>
								</li>
							</ul>
							<ul v-if="tabIndex === 0">
								<li v-for="(pic ,index) in pics" @click="tabClick(0,index)">
									<div class="show_block_top">
										<img :src="require(`@/assets/index_right_bottom_icon.png`)" alt="" class="show_icon">
										<div class="show_block_inner">
											<img v-lazy="pic.src" alt="">
										</div>
									</div>
									<div class="show_block_bottom">
										{{pic.name}}
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import db from "@/common/js/db";

	export default {
		name: 'index',
		data() {
			return {
				tabIndex: 1,
				infos: [],
				webs: [],
				pics: [],
				showImg: true,
				videoSrcName: 'house',
				// showStart: true,
				interval: null,
				// timeout: null
			}
		},
		destroyed() {
			clearInterval(this.interval)
		},
		mounted() {
			// this.timeout = setTimeout(() => {
			// 	this.showStart = false
			// }, 8000)

			this.infos = db().info
			this.webs = db().webs
			this.getPics()
			// setTimeout(()=>{
				this.$refs.video1.addEventListener("canplaythrough", () => { //监听audio是否加载完毕，如果加载完毕，则读取audio播放时间
					if(this.videoSrcName === 'house'){
						this.$refs.video1.play()
					}else{
						this.$refs.video2.play()
					}
					this.changeVideo(4000)
				})
			// },7000)
		},
		methods: {
			tabHover(index) {
				this.tabIndex = index;
			},
			tabClick(index, itemIndex) {
				itemIndex = itemIndex || 0
				if (index === 0) {
					this.$router.push({
						name: 'pic',
						params: {
							itemIndex
						}
					})
				} else if (index === 1) {
					this.$router.push({
						name: 'web',
						params: {
							itemIndex
						}
					})
				}

			},
			getPics() {
				let files = require.context('../../static/smPicImgs', false, /.(png|jpg|JPG|jpeg|gif|bmp|webp)$/).keys()

				files.forEach(item => {
					let name = item.substr(2, item.length)
					this.pics.push({
						src: `./static/smPicImgs/${name}`,
						name: name
					})
				});
			},
			changeVideo(timeout) {
				this.showImg = false
				clearInterval(this.interval)
				this.interval = setInterval(() => {
					this.videoSrcName = this.videoSrcName === 'house' ? 'cloud' : 'house'
					// if(this.videoSrcName === 'house'){
					// 	this.$refs.video1.currentTime = 1
					// }else{
					// 	this.$refs.video2.currentTime = 0
					// }
				}, timeout)
			}
		}
	}
</script>

<style scoped lang="less">
	@import "../common/less/index.less";
	// .start{
	// 	width: 100vw;
	// 	height: 100vh;
	// 	position: fixed;
	// 	background: #fff;
	// 	top:0;
	// 	left:0;
	// 	z-index: 10;
	// }
	// .start,
	// .start img,
	// .start_word {
	// 	transition: all 1s;
	// }

	// .start img {
	// 	position: fixed;
	// 	width: 100vw;
	// 	height: 100vh;
	// 	top: 0;
	// 	left: 0;
	// 	z-index: 9;
	// }
	// .start video {
	// 	position: fixed;
	// 	width: 120vw;
	// 	// height: 100vh;
	// 	top: -200px;
	// 	left: 0;
	// 	z-index: 9;
	// }
	
	// .start.active {
	// 	display: none;
	// 	.start_word {
	// 		margin-left: -20%;
	// 		opacity: 0;
	// 	}
	// }
	
	// .big_word {
	// 	font-size: 40px;
	// 	margin-bottom: 10px;
	// }

	// .start_word {
	// 	position: fixed;
	// 	width: 100vw;
	// 	top: 0;
	// 	left: 0;
	// 	z-index: 10;
	// 	font-size: 30px;
	// 	color: #e6e6e6;
	// 	text-align: center;
	// 	padding: 25vh 0;
	// }

	.index {
		overflow: hidden;
	}

	.index_video_wrap {
		height: 13.5vw;
		overflow: hidden;
		position: relative;
	}

	.index_video_top {
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 2;
		background: rgba(99, 235, 224, 0.4);
	}

	.index_video {
		width: 100%;
		margin-top: -80px;
		position: relative;
		z-index: 0;
		vertical-align: bottom;
		background: none;
	}

	.index_video_bg {
		position: absolute;
		width: 100%;
		height: 13.5vw;
		vertical-align: bottom;
		z-index: 2;
		opacity: 1;
		transition: all 1s;

		&.active {
			opacity: 0;
		}
	}

	.index_child {
		width: 50%;
		float: left;
		height: 100vh;
		overflow: hidden;
		// position: relative;
	}

	.index_child_inner {
		height: 100%;
		position: relative;
		overflow-y: auto;
		overflow-x: hidden;
		width: calc(100% + 16px);
	}

	.index_right {
		box-shadow: 0 -10px 50px 50px rgba(0, 0, 0, 0.1);
		position: relative;
		z-index: 1;
	}

	.index_left_top {
		position: relative;

		&>img {
			width: 100%;
			vertical-align: bottom;
		}
	}

	@avartar_width: 100px;

	.index_avartar {
		position: absolute;
		width: @avartar_width;
		height: @avartar_width;
		border: 8px solid #fff;
		bottom: -@avartar_width/2;
		left: 42%;
		border-radius: 50%;
		z-index: 3;

		img {
			width: 100%;
			height: 100%;
			vertical-align: bottom;
		}
	}

	.index_left_bottom {
		position: fixed;
		right: calc(50% - 35px);
		bottom: 0;
		widows: 45%;
		z-index: 0;
	}

	.index_infro {
		margin-top: @avartar_width/3*2.5;

		span,
		i {
			display: inline-block;
			vertical-align: middle;
		}

		.content {
			width: 200px;
			margin: 0 auto;
		}

		p {
			letter-spacing: 1px;
			color: @word_color_2;
			font-size: 0.9em;
			line-height: 20px;
		}
	}

	.index_infor_line {
		background: @theme_color_2;
		padding-bottom: 2px;
		margin-bottom: 10px;
	}

	.index_infor_b_word {
		font-size: 1.3em;
		font-weight: bold;
		margin-right: 30px;
	}

	.index_infor_s_word {
		font-size: 0.9em;
	}

	.index_word_list {
		position: relative;
		z-index: 2;
		margin-top: 30px;
		// height:48vh;
	}

	.word_list_wrap {
		width: 80%;
		margin: 0 auto;
		// height: 100%;
		// overflow: hidden;
		position: relative;
	}

	.word_list_inner {
		// width: calc(100% + 7px);
		// height: 100%;
		// overflow-y: scroll;
		// overflow-x: visible;
		margin-left: 5px;

		li {
			overflow: hidden;
		}
	}

	.word_list_line {
		position: absolute;
		height: 100%;
		top: 13px;
		left: 16px;
		border-left: 1px solid @line_color;
	}

	@circle: 13px;

	.circle_wrap {
		width: @circle;
		height: @circle;
		padding: 5px;
		border-radius: 50%;
		background: rgba(66, 218, 226, 0.5);
		float: left;
		position: relative;
		z-index: 1;
		margin-top: 8px;
	}

	.circle_inner {
		width: @circle;
		height: @circle;
		background: @theme_color_1;
		border-radius: 50%;
	}

	.word_block {
		float: left;
		width: calc(100% - 50px);
	}

	.word_title {
		overflow: hidden;
	}

	.word_title_txt {
		width: 130px;
		height: 36px;
		line-height: 36px;
		text-align: center;
		background: @theme_color_1;
		color: #fff;
		float: left;
		border-top-right-radius: 20px;
		border-bottom-right-radius: 20px;
		font-size: 1.1em;
		cursor: pointer;
	}

	.triangle {
		width: 0;
		height: 0;
		border-width: 10px;
		border-style: dashed dashed solid dashed;
		border-color: transparent transparent @theme_color_1 transparent;
		transform: rotate(-90deg);
		float: left;
		margin-top: 8px;
	}

	.word_body {
		margin: 20px;
		color: @word_color_2;
		font-size: 0.9em;
		line-height: 30px;
		padding-bottom: 20px;
	}

	.word_border {
		border-bottom: 1px dashed @line_color;
	}

	.word_row_tit {
		opacity: 0.5;
		font-size: 0.9em;
		display: inline-block;
		margin-right: 10px;
	}

	.index_right {
		&>img {
			width: 100%;
			vertical-align: bottom;
		}
	}

	.index_right_top {
		background: lighten(@theme_color_2, 3%);
		padding: 1.5vw 0;
		height: 120px;
	}

	.index_right_book {
		float: left;
		margin: -100px 40px 0 60px;
		position: relative;
		z-index: 1;
		box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.1);
		width: 32%;
	}

	.index_right_top_word {
		width: 50%;
		float: left;
	}

	.index_right_top_title {
		font-size: 1.3em;
		margin-bottom: 10px;
		text-align: right;

		span {
			text-decoration: underline;
		}
	}

	.index_right_top_word {
		opacity: 0.7;
		font-size: 0.8vw;
		line-height: 25px;
		text-indent: 2em;
	}

	.index_tab {
		margin: 60px;
	}

	.tab_btn {
		border-radius: 30px;
		overflow: hidden;
		width: auto;
		display: inline-block;
		cursor: pointer;
		margin-bottom: 20px;

		span {
			display: inline-block;
			margin-right: -3px;
			background: @word_color_2;
			color: #fff;
			text-align: center;
			width: 150px;
			height: 36px;
			line-height: 36px;
			transition: all 0.5s;

			&.active {
				background: @theme_color_1;
			}
		}
	}

	.tab_body {
		// height: 45vh;
		// overflow: hidden;

		ul {
			overflow: hidden;
			padding: 3px;

			li {
				width: 30%;
				float: left;
				box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.08);
				cursor: pointer;
				margin-right: 4%;
				margin-bottom: 30px;
				transition: all 0.2s;

				&:nth-child(3n) {
					margin-right: 0;
				}

				&:hover {
					box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.03);
				}
			}
		}

	}

	.tab_body_inner {
		// height: 100%;
		// width: calc(100% + 11px);
		// overflow-y: scroll;
	}

	.show_block_top {
		position: relative;
	}

	.show_icon {
		position: absolute;
		bottom: -5px;
		left: 46%;
	}

	.show_block_top {
		padding: 10px;
		background: lighten(@theme_color_1, 40%);
	}

	.show_block_inner {
		text-align: center;
		overflow: hidden;

		img {
			height: 100px;
			vertical-align: bottom;
		}
	}

	.show_block_bottom {
		background: #fff;
		text-align: center;
		padding: 20px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.swiper-pagination-bullet-active {
		background: @theme_color_1 !important;
	}

	@media screen and (max-width: 768px) {
		// .start video {
		// 	width: auto;
		// 	height: 130vh;
		// 	left: -200vw;
		// }
		.index_right_top_body{
			font-size: 13px;
		}
		.index_video_wrap {
			height: 17vh;
		}

		.index_video {
			width: 100%;
			margin-top: -20px;
			position: relative;
			z-index: 1;
			vertical-align: bottom;
			// opacity: 0.3;
		}

		.index_video_bg {
			height: 17vh;
		}

		.index_child {
			width: 100%;
			height: auto;
			float: none;
		}

		.index_left_bottom {
			position: absolute;
			right: 0;
			display: none;
		}

		.index_avartar {
			width: 70px !important;
			height: 70px !important;
			left: 35% !important;
		}

		.word_body {
			margin: 20px 0 20px 20px;
		}

		.word_list_wrap {
			width: 95% !important;
		}

		.index_right_book {
			margin: -50px 10px 10px 10px;
		}

		.index_right_top {
			height: 150px;
		}

		.index_right_top_title {
			margin-bottom: 5px;
		}

		.index_right_top_word {
			width: 90%;
			margin: -30px 3%;
		}

		.index_tab {
			margin: 10px;
		}

		.tab_btn {
			margin: 10px 0;
		}

		.tab_body ul li {
			width: 45%;
			margin-bottom: 20px;

			&:nth-child(3n) {
				margin-right: 4%;
			}
		}
	}
</style>
