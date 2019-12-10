<template>
    <section class="statistics">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-4">
              <div class="box">
                <i class="fa fa-envelope fa-fw bg-primary"></i>
                <div class="info">
                  <h3>1,245</h3> <span>Emails</span>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="box">
                <i class="fa fa-file fa-fw danger"></i>
                <div class="info">
                  <h3>34</h3> <span>Projects</span>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="box">
                <i class="fa fa-users fa-fw success"></i>
                <div class="info">
                  <h3>5,245</h3> <span>Users</span>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name:'Statistics'  
})
</script>