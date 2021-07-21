<template>
    <div class="film-container">
        <div class="film-inner">
            <img :src="imgURL" :alt="`copertina di ${title}`">
            <div class="opacity"></div>
            <div class="info-container">
                <div class="info-inner row align-items-center">
                    <div class="title-film col-12">{{ title }}</div>
                    <div class="original-title-film col-6">{{ originalTitle }}</div>
                    <div class="preferences col-6">
                        <div class="vote-film">
                            <i v-for="star in voteToStars" :key="star.id" class="fas fa-star"></i>
                            <i v-for="star in emptyStars" :key="star.id" class="far fa-star"></i>
                        </div>
                        <div class="lang-film">
                            <img :src="flagNation" :alt="language">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="new-arrivals">
            <span v-if="newArrivals()">Nuovi Arrivi</span>
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
        language: String,
        dateArrival: String
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
        },

        getDay() {
            
            let year = parseInt(this.$dayjs().format('YYYY'));
            const month = parseInt(this.$dayjs().format('MM'));
          
            let newMonth = null;

            if(month === 1) {
                newMonth = 11;
                year -= 1;
            } else if (month === 2) {
                newMonth = 12;
                year -= 1;
            } else {
                
                newMonth = month - 2;
                if (newMonth > 0 && newMonth < 10) {
                    newMonth = `0${newMonth}`;
                }
            }

            let stringDay = `${year}-${newMonth}`;

            return stringDay
        },

        dateArrivalsString() {
            let dateArrivalsList = [];

            if (typeof this.dateArrival !== 'undefined') {
                dateArrivalsList = this.dateArrival.split('-');   
            } else {
                dateArrivalsList = ['0000', '00'];
            }
            return `${dateArrivalsList[0]}-${dateArrivalsList[1]}`;
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

        },

        newArrivals() {
            console.log(this.dateArrivalsString)
            if (this.dateArrivalsString === this.getDay) {
                console.log('true')
                return true;
            }

            return false;

        },

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
                background: rgba(0, 0, 0, .5);
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
                    font-weight: bold;
                    margin-bottom: 6px;
    
                }
    
                .original-title-film {
                    font-size: 12px;
                    color: $link;
                    text-align: center;
                    font-weight: bold;
                }

                .preferences {
                    font-size: 12px;
                    text-align: right;

                    .vote-film {
                        font-size: 10px;
                        color: #fdd017;
                    }

                    .lang-film {
                        text-align: center;

                        img {
                            width: 20px;
                        }
                    }
                }
            }

        }

        .new-arrivals {
            padding: 6px;
            
            span {
                background-color: $red;
                padding: 3px 6px;
                border-radius: 3px;
                font-size: 13px;
                font-weight: 600;
            }
        }
    }

</style>