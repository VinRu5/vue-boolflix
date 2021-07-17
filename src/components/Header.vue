<template>
    <header class="row align-items-center">
        <div class="logo-container col-1">
            <img src="../assets/Netflix-Logo.png" alt="Logo Netflix">
        </div>
        <nav class="col">
            <ul>
                <li v-for="item in navList" :key="item.id">{{ item.text }}</li>
            </ul>
        </nav>
        <div class="search-bar col-4">
            <div class="search-inner">
                <input type="text" v-model="inputSearch" @keyup.enter="$emit('search', inputSearch)">
                <font-awesome-icon icon="search" class="search-icon" @clik="$emit('search', inputSearch)" />
                <div class="user-profile">BAMBINI</div>
                <font-awesome-icon icon="bell" class="notice-icon" />
                <div class="user-img"></div>
                <font-awesome-icon icon="sort-down" class="menu-icon" />
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
            inputSearch: ''
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
            }
        }
    }
</style>