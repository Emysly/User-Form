import React, { Component } from "react";
import "./sidebar.css";

export default class sidebar extends Component {
  render() {
    return (
      <div>
        <div className="side">
          <div className="dahboard">
            <div class="accordion" id="accordionExample">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h2 class="mb-0">
                    <button
                      class="btn"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Dashboard
                    </button>
                  </h2>
                </div>

                <div
                  id="collapseOne"
                  class="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <button class="btn" type="button">
                      Users
                    </button>
                    <button class="btn" type="button">
                      Recycle Bin
                    </button>
                    <button class="btn" type="button">
                      Profiling
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="data"></div>
      </div>
    );
  }
}
