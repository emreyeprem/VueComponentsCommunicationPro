<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my name</button>
        <p>Name is {{ name }}</p>
        <p>Age is {{ age }}</p>
        <hr>
        <!-- row class below is the parent component, user detail and user edit are chils components -->
        <div class="row">

            <div class="col-xs-12 col-sm-6"> 
                <app-user-detail :myName="name" @nameWasReset="name = $event" :resetFnc="resetName" :userAge="age"></app-user-detail>
            </div>

            <div class="col-xs-12 col-sm-6">
                <app-user-edit :userAge="age" @ageWasEdited="age = $event"></app-user-edit>
            </div>

        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function(){
           return {
               name: 'John Doe',
               age: 27
           };
        },
        methods: {
           changeName(){
               this.name = 'Mary Doe'
           },
           resetName() {
               this.name = 'John Doe'
           }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
