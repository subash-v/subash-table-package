import React from "react";
const Skeleton = () => {
  return (
    <>
      {[0, 1, 0, 1, 0, 1, 0, 0, 0].map((ele: any) => (
        <>
          <div
            className={`border shadow p-3 max-w-sm w-full ${
              ele === 1
                ? "bg-bg-send ml-auto mr-0 rounded-br-10px_0_10px_10px"
                : "bg-bg-sent rounded-br-0_10px_10px mr-auto"
            }`}
          >
            <div className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-3 py-1">
                <div className="h-2 w-1/3 bg-slate-300 rounded"></div>
                <div className="space-y-1">
                  <div className="grid gap-4"></div>
                  <div className="h-10 bg-quoted-msg-color rounded"></div>
                </div>
                <div className="h-2 bg-slate-300 rounded flex w-1/12 float-right"></div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};
export default Skeleton;
