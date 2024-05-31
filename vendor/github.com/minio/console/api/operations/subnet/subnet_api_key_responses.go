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

package subnet

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/minio/console/models"
)

// SubnetAPIKeyOKCode is the HTTP code returned for type SubnetAPIKeyOK
const SubnetAPIKeyOKCode int = 200

/*
SubnetAPIKeyOK A successful response.

swagger:response subnetApiKeyOK
*/
type SubnetAPIKeyOK struct {

	/*
	  In: Body
	*/
	Payload *models.APIKey `json:"body,omitempty"`
}

// NewSubnetAPIKeyOK creates SubnetAPIKeyOK with default headers values
func NewSubnetAPIKeyOK() *SubnetAPIKeyOK {

	return &SubnetAPIKeyOK{}
}

// WithPayload adds the payload to the subnet Api key o k response
func (o *SubnetAPIKeyOK) WithPayload(payload *models.APIKey) *SubnetAPIKeyOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the subnet Api key o k response
func (o *SubnetAPIKeyOK) SetPayload(payload *models.APIKey) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *SubnetAPIKeyOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}

/*
SubnetAPIKeyDefault Generic error response.

swagger:response subnetApiKeyDefault
*/
type SubnetAPIKeyDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.APIError `json:"body,omitempty"`
}

// NewSubnetAPIKeyDefault creates SubnetAPIKeyDefault with default headers values
func NewSubnetAPIKeyDefault(code int) *SubnetAPIKeyDefault {
	if code <= 0 {
		code = 500
	}

	return &SubnetAPIKeyDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the subnet Api key default response
func (o *SubnetAPIKeyDefault) WithStatusCode(code int) *SubnetAPIKeyDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the subnet Api key default response
func (o *SubnetAPIKeyDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the subnet Api key default response
func (o *SubnetAPIKeyDefault) WithPayload(payload *models.APIError) *SubnetAPIKeyDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the subnet Api key default response
func (o *SubnetAPIKeyDefault) SetPayload(payload *models.APIError) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *SubnetAPIKeyDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
