<template>
  <div class="about">
    <br><br>
    <h4>Sign up</h4>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">USER NAME</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <br>
            <div class="form-group">
              <label for="exampleInputPassword1">PASSWORD</label>
              <input
                type="passwordd"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>

            <br>

            <div class="form-group">
              <label for="exampleInputPassword1">REPEAT PASSWORD</label>
              <input
                type="passwordd"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Repeat Password"
              />
            </div>

            <br>
            <button
              type="submit"
              class="btn btn-primary"
              style="background-color:#ffc107;border:none;"
            >
              Submit
            </button>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>
