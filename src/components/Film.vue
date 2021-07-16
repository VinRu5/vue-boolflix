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
                        <div class="vote-film">{{ vote }}</div>
                        <div class="lang-film">{{ language }}</div>
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
    }
}
</script>

<style lang="scss" scoped>
@import '../style/colors';

    .film-container {
        color: $white;

        .film-inner {
            height: 350px;
            width: 100%;
            position: relative;
            
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