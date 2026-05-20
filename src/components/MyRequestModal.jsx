

import { Button, Modal } from "@heroui/react";
import ApprovedBtn from "./ApprovedBtn";

export function MyRequestModal({ adoptRequest }) {

  console.log('from modal', adoptRequest)



  return (
    <Modal>
      <Button className='w-full  text-green-500 rounded-lg text-sm font-semibold text-center' variant="outline">Request</Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-lg">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>All Request For This Pet</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <div className="space-y-2">
                {
                  adoptRequest.map(pets => <div key={pets?._id} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition space-y-1">

                    {/* Title */}
                    <div>
                      <h2 className="text-lg font-bold text-gray-800">
                        Adoption Request
                      </h2>
                      <p className="text-xs text-gray-500">
                        Review the adoption request details
                      </p>
                    </div>

                    {/* User Info */}
                    <div className="space-y-2">
                      <div>
                        <p className="text-xs text-gray-400">Requested User Name</p>
                        <h3 className="font-semibold text-gray-800">
                          {pets?.requesterName}
                        </h3>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-gray-400">Email</p>
                          <p className="text-sm text-gray-700 break-all">
                            {pets?.requesterEmail}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs text-gray-400">Pickup Date</p>
                          <p className="text-sm font-medium text-gray-700">
                            {pets?.adoptingDate}
                          </p>
                        </div>

                      </div>

                    </div>

                    {/* Message */}
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Message</p>

                      <p className="text-sm text-gray-600 line-clamp-2">
                        {pets?.message}
                      </p>
                    </div>

                    {/* Buttons */}
                    {
                      (pets?.status === "Approved" || pets?.status === "Rejected") ?
                        <></>
                        :
                        <div className="flex gap-3 pt-2">
                          <ApprovedBtn pets={pets} />

                          <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl text-sm font-semibold transition">
                            Reject
                          </button>
                        </div>
                    }

                  </div>)
                }
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger-soft" className="w-full" slot="close">
                Close
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}