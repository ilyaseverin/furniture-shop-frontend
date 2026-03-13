import Link from "next/link";
import Image from "next/image";
import React from "react";
import SidebarNav from "./SidebarNav";

export default function AccountOrders() {
  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="my-account-wrap">
          <SidebarNav />
          <div className="my-account-content">
            <div className="account-orders">
              <div className="wrap-account-order">
                <table>
                  <thead>
                    <tr>
                      <th className="fw-6">Заказ</th>
                      <th className="fw-6">Дата</th>
                      <th className="fw-6">Статус</th>
                      <th className="fw-6">Итого</th>
                      <th className="fw-6">Действия</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="tf-order-item">
                      <td>#123</td>
                      <td>1 августа 2025 г.</td>
                      <td>На удержании</td>
                      <td>₽200,0 за 1 шт.</td>
                      <td>
                        <Link
                          href={`/my-account-orders-details`}
                          className="tf-btn btn-onsurface radius-4"
                        >
                          Просмотр
                        </Link>
                      </td>
                    </tr>
                    <tr className="tf-order-item">
                      <td>#345</td>
                      <td>2 августа 2025 г.</td>
                      <td>На удержании</td>
                      <td>₽300,0 за 1 шт.</td>
                      <td>
                        <Link
                          href={`/my-account-orders-details`}
                          className="tf-btn btn-onsurface radius-4"
                        >
                          Просмотр
                        </Link>
                      </td>
                    </tr>
                    <tr className="tf-order-item">
                      <td>#567</td>
                      <td>3 августа 2025 г.</td>
                      <td>На удержании</td>
                      <td>₽400,0 за 1 шт.</td>
                      <td>
                        <Link
                          href={`/my-account-orders-details`}
                          className="tf-btn btn-onsurface radius-4"
                        >
                          Просмотр
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
