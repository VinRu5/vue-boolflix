<template>
    <header class="row align-items-center">
        <div class="logo-container col-2 col-md-1">
            <img src="../assets/Netflix-Logo.png" alt="Logo Netflix">
        </div>
        <nav class="col">
            <div class="d-none d-md-block">
                <ul>
                    <li v-for="item in navList" :key="item.id"
                        @click="$emit('clickMenu', item.value)"
                    >
                        <a href="#">
                            {{ item.text }}
                        </a>
                        <div class="line-red"></div>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="col-2">
            <input v-if="flagViewSearchBar" type="text" ref="input" v-model="inputSearch" @keyup.enter="passValue">
        </div>
        <div class="search-bar col-4 col-md-2 col-lg-3">
            <div class="burger-menu d-block d-lg-none" >
                <i class="fas fa-bars"></i>
            </div>
            <div class="d-none d-lg-block">
                <div class="search-inner">
                    <!-- <input v-if="flagViewSearchBar" type="text" v-model="inputSearch" @keyup.enter="$emit('search', inputSearch)"> -->
                    <i class="fas fa-search search-icon" @click="viewSearchBar"></i>
                    <div class="user-profile">BAMBINI</div>
                    <i class="fas fa-bell notice-icon"></i>
                    <div class="user-img"></div>
                    <i class="fas fa-sort-down menu-icon"></i>
                </div>
            </div>
           
        </div>
    </header>

</template>

<script>
export default {
    name: 'Header',
    props: {
        navList: Array,
    },

    data() {
        return {
            inputSearch: '',
            flagViewSearchBar: false,
        }
    },

    methods: {
        viewSearchBar() {
            this.flagViewSearchBar = !this.flagViewSearchBar;
        },

        passValue() {
            this.$emit('search', this.inputSearch);
            this.inputSearch = "";
        },
    }
}
</script>

<style lang="scss" scoped>
@import '../style/colors';

    header {
        height: 50px;
        
        .logo-container {

            img {
                width: 100%;
            }
        }

        input {
            border: 1px solid $white;
            background-color: $bg-color;
            border-radius: 6px;
            color: $white;
        }

        nav {
            

            ul {
                display: flex;
                align-items: center;
                

                li {
                    margin: 0 6px;
                    font-size: 12px;
                    font-weight: bold;
                    cursor: pointer;


                    a {
                        border-bottom: 2px solid rgba($color: #000000, $alpha: 0);
                        color: $link;
                        text-decoration: none;
                        padding-bottom: 24px;

                        &:hover {
                            color: $white;
                        }

                        &:focus {
                            color: $white;
                            border-bottom: 2px solid $red;
                        }

                        &:active {
                            color: $red;
    
                        }
                    }

                }
            }
        }

        .search-bar {
            color: $white;

            .burger-menu {
                text-align: right;
            }

            .search-inner {
                display: flex;
                justify-content: space-around;
                align-items: center;
                font-size: 14px;

                .user-img {
                    width: 25px;
                    height: 25px;
                    background-color: seagreen;
                }

                .search-icon {
                    cursor: pointer;
                }
            }
        }
    }

</style>