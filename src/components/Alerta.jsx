import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Alerta(msg) {
    return (
        <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                    <strong class="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
                <div class="toast-body">
                    {msg}
                </div>
        </div>
    )
}