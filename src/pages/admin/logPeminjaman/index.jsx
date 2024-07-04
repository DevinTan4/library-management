import { searchBlackIcon } from "../../../assets/icons";
import Icon from "../../_components/_atoms/Icon";
import Typography from "../../_components/_atoms/Typography";
import AdminLayout from "../../_components/_templates/AdminLayout";
import logBooks from "../../../data/logBooks";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const AdminLogPeminjamanPage = () => {
  return (
    <div className="w-full min-h-screen bg-cream">
      {/* Sidebar and Navbar */}
      <AdminLayout />

      {/* Main */}
      <main className="pt-[72px] pb-[41px] px-[22px] font-dmSans lg:pt-[129px] lg:pl-[168px] lg:pr-[50px] lg:pb-11 desktop:pl-[342px] desktop:pr-[53px] desktop:pb-16">
        <div className="w-full h-full bg-white px-[21px] py-[15px] flex flex-col gap-[15px] lg:px-[46px] lg:py-[38px] lg:gap-10">
          <div className="flex flex-col gap-[10px] lg:flex-row lg:justify-between">
            <Typography variant="h4" className="text-blue lg:text-[40px]">
              Log Peminjaman
            </Typography>

            {/* Search bar */}
            <div className="w-full h-[35px] border border-slate-400 flex items-center px-[13px] py-2 justify-between gap-2 lg:max-w-[295px] desktop:max-w-[500px]">
              <input
                type="text"
                placeholder="Cari"
                className="text-[15px] w-full placeholder:text-[15px] focus:outline-none"
              />
              <Icon src={searchBlackIcon} className="size-4" />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-400">
              <thead className="bg-slate-100">
                <tr>
                  <th
                    scope="col"
                    className="px-4 py-2 text-sm font-semibold text-left text-gray-700"
                  >
                    No
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-2 text-sm font-semibold text-left text-gray-700"
                  >
                    Judul Buku
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-2 text-sm font-semibold text-left text-gray-700"
                  >
                    Peminjam
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-2 text-sm font-semibold text-left text-gray-700"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-2 text-sm font-semibold text-left text-gray-700"
                  >
                    Tgl Pinjam
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-2 text-sm font-semibold text-left text-gray-700"
                  >
                    Tgl Kembali
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-2 text-sm font-semibold text-left text-gray-700"
                  >
                    Status
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-slate-400">
                {logBooks.map((log) => (
                  <tr key={log.no}>
                    <td className="px-4 py-2 whitespace-nowrap">{log.no}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{log.title}</td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <div>{log.borrower}</div>
                      <div className="text-sm text-gray-500">{log.class}</div>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <a
                        href={`mailto:${log.email}`}
                        className="text-blue-500 hover:underline"
                      >
                        {log.email}
                      </a>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      {log.dateBorrowed}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      {log.dateReturned}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      {log.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Page number */}
          <div className="flex justify-between mt-[3px]">
            <Typography className="text-[10px] lg:text-[15px]">
              Showing 1 of 160 results
            </Typography>
            <div className="flex items-center gap-2 lg:gap-4">
              <HiChevronLeft className="cursor-pointer size-5 lg:size-6" />
              <button className="cursor-pointer text-orange lg:text-lg">
                1
              </button>
              <button className="cursor-pointer lg:text-lg">2</button>
              <button className="cursor-pointer lg:text-lg">3</button>
              <button className="cursor-pointer lg:text-lg">4</button>
              <button className="cursor-pointer lg:text-lg">5</button>
              <HiChevronRight className="cursor-pointer size-5 lg:size-6" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminLogPeminjamanPage;
