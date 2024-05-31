// Code generated by go-swagger; DO NOT EDIT.

// This file is part of MinIO Console Server
// Copyright (c) 2023 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//

package k_m_s

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/minio/console/models"
)

// KMSListIdentitiesOKCode is the HTTP code returned for type KMSListIdentitiesOK
const KMSListIdentitiesOKCode int = 200

/*
KMSListIdentitiesOK A successful response.

swagger:response kMSListIdentitiesOK
*/
type KMSListIdentitiesOK struct {

	/*
	  In: Body
	*/
	Payload *models.KmsListIdentitiesResponse `json:"body,omitempty"`
}

// NewKMSListIdentitiesOK creates KMSListIdentitiesOK with default headers values
func NewKMSListIdentitiesOK() *KMSListIdentitiesOK {

	return &KMSListIdentitiesOK{}
}

// WithPayload adds the payload to the k m s list identities o k response
func (o *KMSListIdentitiesOK) WithPayload(payload *models.KmsListIdentitiesResponse) *KMSListIdentitiesOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the k m s list identities o k response
func (o *KMSListIdentitiesOK) SetPayload(payload *models.KmsListIdentitiesResponse) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *KMSListIdentitiesOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}

/*
KMSListIdentitiesDefault Generic error response.

swagger:response kMSListIdentitiesDefault
*/
type KMSListIdentitiesDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.APIError `json:"body,omitempty"`
}

// NewKMSListIdentitiesDefault creates KMSListIdentitiesDefault with default headers values
func NewKMSListIdentitiesDefault(code int) *KMSListIdentitiesDefault {
	if code <= 0 {
		code = 500
	}

	return &KMSListIdentitiesDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the k m s list identities default response
func (o *KMSListIdentitiesDefault) WithStatusCode(code int) *KMSListIdentitiesDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the k m s list identities default response
func (o *KMSListIdentitiesDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the k m s list identities default response
func (o *KMSListIdentitiesDefault) WithPayload(payload *models.APIError) *KMSListIdentitiesDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the k m s list identities default response
func (o *KMSListIdentitiesDefault) SetPayload(payload *models.APIError) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *KMSListIdentitiesDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
