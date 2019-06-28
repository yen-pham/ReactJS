import React, { Component } from 'react';

class NoteItem extends Component {
    render() {
        return (
            <div className="card ">
                <div className="card-header shadow p-4 mb-4 bg-secondary " role="tab" id="notee1">
                  <h5 className="mb-0">
                    <a data-toggle="collapse" data-parent="#accordianId" href="#note1" aria-expanded="true" aria-controls="note1">
                      Ghi chú ngày 27/6/2019
                    </a>
                  </h5>
                </div>
                <div id="note1" className="collapse in" role="tabpanel" aria-labelledby="note1">
                  <div className="card-body">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam animi aut temporibus distinctio, fuga alias ratione odio nemo saepe cumque assumenda fugit dicta incidunt, mollitia ab cum consequatur, esse impedit.
                  </div>
                </div>
              </div>
        );
    }
}

export default NoteItem;