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
        <div class="search-bar col-2">
            <font-awesome-icon icon="fa-search" class="icon-search" />
            <font-awesome-icon icon="fa-search" />
        </div>
    </header>

</template>

<script>
export default {
    name: 'Header',
    props: {
        navList: Array,
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
                }
            }
        }

        .search-bar {
            color: $white;
        }
    }
</style>