<template>
    <div class="film-container">
        <div class="film-inner">
            <img :src="imgURL" :alt="`copertina di ${title}`">
            <div class="opacity"></div>
            <div class="info-container">
                <div class="info-inner row">
                    <div class="title-film col-12">{{ title }}</div>
                    <div class="original-title-film col-7">{{ originalTitle }}</div>
                    <div class="preferences col-3">
                        <div class="vote-film">
                            <i v-for="star in voteToStars" :key="star.id" class="fas fa-star"></i>
                            <i v-for="star in emptyStars" :key="star.id" class="far fa-star"></i>
                        </div>
                        <div class="lang-film">
                            {{ language }}
                            <img :src="flagNation" :alt="language">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Film',
    props: {
        imgURL: String,
        title: String,
        originalTitle: String,
        vote: Number,
        language: String
    },
    data() {
        return {
            voteToStars: [],
            emptyStars: []

        }
    },
    computed: {
        flagNation() {
            return require(`../assets/${this.language}.png`)
        }
    },
    methods: {
        calcStars() {
            let blackStar = Math.round(this.vote / 2);
            let whiteStar = 5 - blackStar;
            let i = 0;


            for (let x = 0; x < blackStar; x++) {
                
                this.voteToStars.push(
                    {
                        id: i,
                        star: true
                    }
                );
                i++
            }

            for (let x = 0; x < whiteStar; x++) {
               
                this.emptyStars.push(
                    {
                        id: i,
                        star: true
                    }
                );
                i++
            }

        }
    },
    created() {
        this.calcStars();
    }
}
</script>

<style lang="scss" scoped>
@import '../style/colors';

    .film-container {
        color: $white;
        margin-top: 12px;
        margin-bottom: 12px;

        .film-inner {
            height: 350px;
            width: 100%;
            position: relative;
            cursor: pointer;
            
            &:hover {

                .opacity {
                    display: block;
                }

                .info-container {
                    display: block;
                }
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .opacity {
                position: absolute;
                bottom: 0;
                left: 0;
                height: 100%;
                width: 100%;
                padding: 12px 6px;
                background: rgba(0, 0, 0, .3);
                display: none;
            }
    
            .info-container {
                position: absolute;
                bottom: 0;
                left: 0;
                padding: 12px 6px;
                display: none;

    
                .title-film {
                    text-align: center;
    
                }
    
                .original-title-film {
                    font-size: 12px;
                    color: $link;
                    text-align: center;
                }

                .preferences {
                    font-size: 12px;
                    text-align: right;
                }
            }

        }
    }

</style>