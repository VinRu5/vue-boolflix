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
                        {{ item.text }}
                    </li>
                </ul>
            </div>
        </nav>
        <div class="search-bar col-3 col-md-1 col-lg-4">
            <div class="burger-menu d-block d-lg-none" >
                <i class="fas fa-bars"></i>
            </div>
            <div class="d-none d-lg-block">
                <div class="search-inner">
                    <input type="text" v-model="inputSearch" @keyup.enter="$emit('search', inputSearch)">
                    <i class="fas fa-search search-icon" @click="$emit('search', inputSearch)"></i>
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
        // inputSearch: String
    },

    data() {
        return {
            inputSearch: ''
        }
    },

    methods: {
        viewBurger() {

        }
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

        nav {

            ul {
                display: flex;
                align-items: center;
                height: 100%;

                li {
                    color: $link;
                    margin: 0 6px;
                    font-size: 12px;
                    font-weight: bold;
                    cursor: pointer;

                    &:hover {
                        color: $white;
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

                input {
                    border: 1px solid $white;
                    background-color: $bg-color;
                    border-radius: 6px;
                    color: $white;
                }

                .search-icon {
                    cursor: pointer;
                }
            }
        }
    }

</style>