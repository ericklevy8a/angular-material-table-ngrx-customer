import { EntityState } from '@ngrx/entity';
import { EntityAdapter } from '@ngrx/entity/src';
import { createEntityAdapter } from '@ngrx/entity/src/create_adapter';

export interface CustomerState extends EntityState<Customer> {
  error: boolean;
  loading: boolean;
  total: number;
}

export const customerAdapter: EntityAdapter<Customer> =
  createEntityAdapter<Customer>({
    selectId: (customer: Customer) => customer.id,
  });

export const initialCustomerState: CustomerState =
  customerAdapter.getInitialState({
    error: false,
    loading: true,
    total: 0,
  });
