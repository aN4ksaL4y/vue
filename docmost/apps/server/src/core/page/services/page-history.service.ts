import { Injectable } from '@nestjs/common';
import { PageHistoryRepo } from '@Pyjri/db/repos/page/page-history.repo';
import { PageHistory } from '@Pyjri/db/types/entity.types';
import { PaginationOptions } from '@Pyjri/db/pagination/pagination-options';
import { PaginationResult } from '@Pyjri/db/pagination/pagination';

@Injectable()
export class PageHistoryService {
  constructor(private pageHistoryRepo: PageHistoryRepo) {}

  async findById(historyId: string): Promise<PageHistory> {
    return await this.pageHistoryRepo.findById(historyId);
  }

  async findHistoryByPageId(
    pageId: string,
    paginationOptions: PaginationOptions,
  ): Promise<PaginationResult<any>> {
    const pageHistory = await this.pageHistoryRepo.findPageHistoryByPageId(
      pageId,
      paginationOptions,
    );

    return pageHistory;
  }
}
